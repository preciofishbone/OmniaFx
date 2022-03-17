import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'


export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    // site config
    lang: 'en-US',
    title: 'OmniaFx',
    description: 'Just playing around',
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
                }
            ],
            '/migration-7/': [
                {
                    text: "Migration Omnia 7",
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
                            text: "WCM Fx",
                            children: [
                                
                            ]

                        }
                    ]
                }

            ]
        }
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