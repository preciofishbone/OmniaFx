---
page: true
title: Introduction
---
<script setup>
import Header from '../../components/Header.tsx'
</script>
![VuePress Logo](/images/omnialogo-black.svg)
# Hello Omnia
```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: 'Hello, VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```
This is default theme built-in `<Badge />` component <Badge text="demo" />
This is default theme built-in `<Header />` component <Header text="demo" />