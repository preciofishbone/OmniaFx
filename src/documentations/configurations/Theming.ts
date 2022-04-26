import { } from "@omnia/fx/ux";

declare var omniaWebpackJsonp;
omniaWebpackJsonp['bb000000-0000-bbbb-0000-0000000000bb']["a2892051-fd9f-4056-ae8d-30d16d48417d"]("10407664-c0c5-438b-94b2-507d58d190af")
    .InternalTopics.omniaUXConfigurationCompleted.subscribe(() => {
        const userMode = localStorage?.getItem('vuepress-color-scheme');
        const dark = userMode === "dark";
        const vueRoot = document.body["__omwcroot__"];

        vueRoot.$theming.body.bg.dark = dark;
    })
