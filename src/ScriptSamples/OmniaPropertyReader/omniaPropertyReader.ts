(async () => {
    const omniaFx = await omniaApi.fx;
    const wcmFx = await omniaApi.wcm.fx;
    const currentPageStore = omniaFx.apis.ServiceContainer.createInstance(wcmFx.CurrentPageStore);
    const currentVersion = currentPageStore.current.state.currentVersion;
    const properties = currentVersion.enterpriseProperties;

    // list enterprise properties keys
    console.dir(properties.keys);

    // get a property value (page title, in this example)
    console.dir(properties.getValue("title"));
})();