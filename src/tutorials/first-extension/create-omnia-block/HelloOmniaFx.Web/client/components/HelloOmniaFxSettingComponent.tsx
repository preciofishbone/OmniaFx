import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject } from "@omnia/fx";
import { StyleFlow } from '@omnia/fx/ux';
import { IHelloOmniaFxSettingComponent, HelloOmniaFxSettingComponentData } from './IHelloOmniaFxSettingComponent';
import { HelloOmniaFxSettingComponentStyles } from './HelloOmniaFxSettingComponent.css';
import { SettingsServiceConstructor, SettingsService, SecurityRoles } from '@omnia/fx/services'

@Component
export default class HelloOmniaFxSettingComponent extends Vue implements IWebComponentInstance, IHelloOmniaFxSettingComponent {

    @Prop() settingsKey: string;

    @Prop({ default: false }) required: boolean;
    @Prop({ default: { title: 'Hello from HelloOmniaFxSettingComponent!' } }) data?: HelloOmniaFxSettingComponentData
    @Prop() styles?: typeof HelloOmniaFxSettingComponentStyles;

    @Inject<SettingsServiceConstructor>(SettingsService) private settingsService: SettingsService<string>;

    private HelloOmniaFxSettingComponentClasses = StyleFlow.use(HelloOmniaFxSettingComponentStyles);

    private settingsData: string = '';
    created() {
        this.settingsService.getValue(this.settingsKey).then((settingsData) => {
            this.settingsData = settingsData;
        })
    }

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    onSettingChanged() {
        this.settingsService.setValue(this.settingsKey, this.settingsData);
    }

    render(h) {
        return (
            <div class={this.HelloOmniaFxSettingComponentClasses.container}>
                <v-text-field label="Header" v-model={this.settingsData} onChange={this.onSettingChanged} />
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, HelloOmniaFxSettingComponent);
});