const globby = require('globby');
const fsExtra = require('fs-extra');
const deepExtend = require('deep-extend');
const { utils } = require("@omnia/tooling");
const md5File = require('md5-file');
const minimist = require('minimist');
const path = require("path");
const fs = require("fs");
const getAppDataPath = require("appdata-path");

const argv = minimist(process.argv.slice(2));
const command = argv._[0];

if (command === "dev") {
    let appPath = getAppDataPath();
    let certFolderPath = path.join(appPath, "omnia", "https");
    const certName = "devcert";
    const certFilePath = path.join(certFolderPath, `${certName}.pem`);
    const keyFilePath = path.join(certFolderPath, `${certName}.key`);

    if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
        const spawn = require('child_process').spawn;

        spawn('dotnet', [
            'dev-certs',
            'https',
            '--export-path',
            certFilePath,
            '--format',
            'Pem',
            '--no-password',
        ], { stdio: 'inherit', })
            .on('exit', (code) => {
            });
    }
}

utils.log('Generating docs stuffs');

const cssFiles = globby.sync([
    "docs/.vuepress/public/omnia/dist/bundles/*.css"
]);

cssFiles.forEach(filePath => {
    content = fsExtra.readFileSync(filePath, 'utf8');
    fsExtra.outputFileSync(filePath,
        content
            .replace(new RegExp('omnia/fonts', 'g'), 'omnia/dist/fonts'),
        'utf8')
});

const manifestsPath = globby.sync([
    "docs/.vuepress/public/omnia/dist/manifests/*_manifests.json"
]);

const localizationsPath = globby.sync([
    "docs/.vuepress/public/omnia/dist/localizations/*_localized.loc.en-us.json"
]);

let manifestJsContent = `window.omnia = window.omnia || {};
    window.omnia.manifests = window.omnia.manifests || {};
`

let localizationJsContent = `window.omnia = window.omnia || {};
window.omnia.language = 'en-us';
`
const outputManifestPath = "docs/.vuepress/public/omnia/dist/manifests/manifest.js";

manifestsPath.forEach(manifestPath => {
    const serviceId = utils.getGuidValue(manifestPath);
    const manifestJson = fsExtra.readFileSync(manifestPath, 'utf8');
    manifestJsContent = manifestJsContent + `
    window.omnia.manifests['${serviceId}'] = ${manifestJson};`
});

fsExtra.outputFileSync(outputManifestPath, manifestJsContent, 'utf8');

let localizationResult = {};
localizationsPath.forEach(localizePath => {
    const locObject = fsExtra.readJsonSync(localizePath, { throws: false });
    if (locObject) {
        localizationResult = deepExtend(localizationResult, locObject);
    } else {
        utils.log(`Invalid localization -> ${localizePath}`);
    }
});

const outputLocalizePath = "docs/.vuepress/public/omnia/dist/localizations/localization.js";
fsExtra.writeJsonSync(outputLocalizePath, localizationResult);
fsExtra.outputFileSync(
    outputLocalizePath,
    `window.omnia.localization = ${fsExtra.readFileSync(outputLocalizePath, 'utf8')};`,
    'utf8');

const outputBuildTemplate = "docs/.vuepress/public/omnia/templates/index.build.html";
const outputDevTemplate = "docs/.vuepress/public/omnia/templates/index.dev.html";

const omniaRuntimePackageVersion = require(utils.root('package.json')).devDependencies["@omnia/runtime"];
const manifestHash = md5File.sync(outputManifestPath);
const localizationHash = md5File.sync(outputLocalizePath);

let devTemplateContent = fsExtra.readFileSync("templates/index.dev.html", 'utf8');
let buildTemplateContent = fsExtra.readFileSync("templates/index.build.html", 'utf8');

devTemplateContent = devTemplateContent
    .replace(/{{omnia_runtime_version}}/g, omniaRuntimePackageVersion)
    .replace(/{{omnia_manifest_version}}/g, manifestHash)
    .replace(/{{omnia_localize_version}}/g, localizationHash)

buildTemplateContent = buildTemplateContent
    .replace(/{{omnia_runtime_version}}/g, omniaRuntimePackageVersion)
    .replace(/{{omnia_manifest_version}}/g, manifestHash)
    .replace(/{{omnia_localize_version}}/g, localizationHash)

fsExtra.outputFileSync(outputDevTemplate, devTemplateContent, 'utf8');
fsExtra.outputFileSync(outputBuildTemplate, buildTemplateContent, 'utf8');

utils.log('Done Generated docs stuffs');