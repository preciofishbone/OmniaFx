const globby = require('globby');
const fsExtra = require('fs-extra');
const deepExtend = require('deep-extend');
const { utils } = require("@omnia/tooling");

utils.log('Update output bundle stuffs');

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

utils.log('Done updated output bundle stuffs');


utils.log('Generating merged manifests and localizations');

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
manifestsPath.forEach(manifestPath => {
    const serviceId = utils.getGuidValue(manifestPath);
    const manifestJson = fsExtra.readFileSync(manifestPath, 'utf8');
    manifestJsContent = manifestJsContent + `
    window.omnia.manifests['${serviceId}'] = ${manifestJson};`
});

fsExtra.outputFileSync("docs/.vuepress/public/omnia/dist/manifests/manifest.js", manifestJsContent, 'utf8');

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

utils.log('Done merged manifests and localizations');