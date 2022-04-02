import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'


export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    // site config
    lang: 'en-US',
    title: 'OmniaFx',
    description: '',
    head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
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
                        { text: "Omnia Fx components" },
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
                                { text: "Components", link: '/migration-7/omnia-fx-components' },
                                { text: "Somethings", link: '' }
                            ]

                        },
                        {
                            text: "Workplace Fx",
                            children: [

                            ]

                        },
                        {
                            text: "Web Content Management Fx",
                            children: [

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
        viteOptions: {
            plugins: [
                vueJsx()
            ]
        }
    },
    plugins: [

    ]
})