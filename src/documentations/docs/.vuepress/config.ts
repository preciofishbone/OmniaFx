import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    // site config
    lang: 'en-US',
    title: 'OmniaFx Docs',
    description: 'Just playing around',
    head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/omnialogo-black.svg',
        logoDark: '/images/omnialogo-white.svg',
    },
    base: "/OmniaFx/",
    //open: true,
    // config tool
    bundler: '@vuepress/bundler-vite',
    bundlerConfig: {
        viteOptions: {
            plugins: [
                vueJsx()
            ]
        }
    }
})