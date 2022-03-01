import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    // site config
    lang: 'en-US',
    title: 'OmniaFx',
    description: 'Just playing around',
    head: [['link', { rel: 'icon', href: '/OmniaFx/images/favicon.png' }]],
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/omnialogo-black.svg',
        logoDark: '/images/omnialogo-white.svg',
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