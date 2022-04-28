import { watch } from "@vue/composition-api";

declare var omniaWebpackJsonp;
omniaWebpackJsonp['bb000000-0000-bbbb-0000-0000000000bb']["a2892051-fd9f-4056-ae8d-30d16d48417d"]("10407664-c0c5-438b-94b2-507d58d190af")
    .InternalTopics.omniaUXConfigurationCompleted.subscribe(() => {
        // const isDarkMode = useDarkMode();
        const updateTheming = () => {
            const userMode = localStorage?.getItem('vuepress-color-scheme');
            const dark = userMode === "dark";
            const vueRoot = document.body["__omwcroot__"];
            vueRoot.$theming.body.bg.dark = dark;
        }

        updateTheming();

        const targetNode = document.getElementsByTagName('html')[0];

        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: false, subtree: false };

        // Callback function to execute when mutations are observed
        const callback = function (mutationsList, observer) {
            updateTheming();
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    })
