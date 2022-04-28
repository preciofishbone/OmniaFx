import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import type { InlineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
import getAppDataPath from "appdata-path";
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2));
const command = argv._[0];

const viteOptions = {
    plugins: [
        vueJsx() as any
    ]
} as InlineConfig

if (command === "dev") {
    const appPath = getAppDataPath();
    const certFolderPath = path.join(appPath, "omnia", "https");
    const certName = "devcert";
    const certFilePath = path.join(certFolderPath, `${certName}.pem`);
    const keyFilePath = path.join(certFolderPath, `${certName}.key`);

    viteOptions.server = {
        https: {
            cert: fs.readFileSync(certFilePath),
            key: fs.readFileSync(keyFilePath)
        }
    };
}

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    debug: true,
    // site config
    lang: 'en-US',
    title: 'OmniaFx',
    description: '',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ],
    // theme and its config
    theme: '@vuepress/theme-default',
    templateBuild: "docs/.vuepress/public/omnia/templates/index.build.html",
    templateDev: "docs/.vuepress/public/omnia/templates/index.dev.html",
    themeConfig: {
        lastUpdated: false,
        contributors: false,
        logo: '/images/omnialogo-black.svg',
        logoDark: '/images/omnialogo-white.svg',
        navbar: [
            {
                text: 'Docs',
                activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
                children: [
                    { text: 'Guide', link: '/guide/introduction' },
                    { text: 'Omnia 7 migration', link: '/migration-7/summary' }
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: "Getting Started",
                    children: [
                        { text: "Introduction", link: '/guide/introduction' },
                        { text: "Quick Start", link: '/guide/quick-start' },
                        { text: "Build your first Extension", link: '/guide/build-your-first-extension' }
                    ]
                },
                {
                    text: "Omnia Fx",
                    children: [
                        { text: "Swagger", link: '/guide/omnia-learn/swagger' },
                        { text: "Alternatives to Visual Studio", link: '/guide/omnia-learn/other-editors' },
                        {
                            text: "Omnia Fx components",
                            children: [
                                { text: "Button", link: '/guide/fx-components/button' },
                                { text: "Tooltip", link: '/guide/fx-components/tooltip' },
                                { text: "People Picker", link: '/guide/fx-components/people-picker' }
                            ]
                        },
                        { text: "Omnia Feature", link: '/guide/omnia-learn/omnia-feature' },
                        { text: "Omnia Localization", link: '/guide/apply-localization' },
                        { text: "Omnia Block", link: '/guide/omnia-learn/create-omnia-block' },
                        { text: "Create Action", link: '/guide/omnia-learn/create-action' },
                        { text: "Manifest load rule", link: '/guide/omnia-learn/manifest-load-rule' },
                        { text: "Wait for App provisioning", link: '/guide/omnia-learn/wait-for-app-provisioning' },
                        { text: "Call Omnia APIs externally", link: '/guide/omnia-learn/call-apis-externally' },
                        { text: "Persistent Disk", link: '/guide/omnia-learn/persistent-disk' }
                    ]
                },
                {
                    text: "Workplace Fx",
                    children: [
                        { text: "Teamwork app", link: '/guide/omnia-learn/teamwork-app' }
                    ]
                },
                {
                    text: "Web Content Management Fx",
                    children: [
                        { text: "Create a Page Rollup View", link: '/guide/omnia-learn/create-page-rollup-view' },
                        { text: "Current Nav style overriding", link: '/guide/omnia-learn/override-style-of-current-navigation' }
                    ]
                }
            ],
            '/migration-7/': [
                {
                    text: "Omnia 7 Migration",
                    link: '/migration-7/summary',
                    children: [
                        {
                            text: "Omnia Fx",
                            children: [
                                { text: "Components", link: '/migration-7/omnia/omnia-fx-components' },
                                { text: "Tsx", link: '/migration-7/omnia/tsx' },
                                { text: "Utils", link: '/migration-7/omnia/utils' },
                                { text: "App Instance", link: '/migration-7/omnia/app-instance' },
                                { text: "Journey", link: '/migration-7/omnia/journey' },
                                { text: "Layout", link: '/migration-7/omnia/layout' },
                                { text: "Ux", link: '/migration-7/omnia/ux' }
                            ]
                        },
                        {
                            text: "Workplace Fx",
                            children: [
                                { text: "Utils", link: '/migration-7/workplace/utils' },
                                { text: "Apps", link: '/migration-7/workplace/apps' },
                                { text: "Search", link: '/migration-7/workplace/search' },
                                { text: "Enterprise Glossary", link: '/migration-7/workplace/enterprise-glossary' }
                            ]

                        },
                        {
                            text: "Web Content Management Fx",
                            children: [
                                { text: "Utils", link: '/migration-7/wcm/utils' },
                                { text: "Page", link: '/migration-7/wcm/page' }
                            ]
                        },
                        {
                            text: "Management System Fx",
                            children: [
                                { text: "Utils", link: '/migration-7/oms/utils' },
                            ]
                        }
                    ]
                }

            ]
        },
        sidebarDepth: 0
    },
    base: "/",
    //open: true,
    // config tool
    bundler: '@vuepress/bundler-vite',
    bundlerConfig: {
        viteOptions: viteOptions as any
    },
    plugins: [
        [
            '@vuepress/docsearch',
            {
                apiKey: '<API_KEY>',
                indexName: '<INDEX_NAME>',
                locales: {
                    '/': {
                        placeholder: 'Search',
                        translations: {
                            button: {
                                buttonText: 'Search',
                            },
                        },
                    },
                },
            },
        ],
    ]
})