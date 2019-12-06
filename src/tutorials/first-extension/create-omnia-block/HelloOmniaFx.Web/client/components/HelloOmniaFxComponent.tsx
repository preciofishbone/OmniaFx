import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject, HttpClientConstructor, HttpClient, SubscriptionHandler } from "@omnia/fx";
import { StyleFlow } from '@omnia/fx/ux';
import { IHelloOmniaFxComponent, HelloOmniaFxComponentData } from './IHelloOmniaFxComponent';
import { HelloOmniaFxComponentStyles } from './HelloOmniaFxComponent.css';
import { SettingsServiceConstructor, SettingsService } from '@omnia/fx/services';
import { HelloOmniaFxBlockData } from '../models/HelloOmniaFxBlockData';

@Component
export default class HelloOmniaFxComponent extends Vue implements IWebComponentInstance, IHelloOmniaFxComponent {

    @Inject<HttpClientConstructor>(HttpClient, {
        configPromise: HttpClient.createOmniaServiceRequestConfig('{service id}')
    }) private httpClient: HttpClient;

    @Inject<SettingsServiceConstructor>(SettingsService) private settingsService: SettingsService<HelloOmniaFxBlockData>;
    @Inject(SubscriptionHandler) subscriptionHandler: SubscriptionHandler;
    @Prop() settingsKey: string;
    @Prop({ default: false }) required: boolean;
    @Prop({ default: { title: 'Hello from HelloOmniaFxComponent!' } }) data?: HelloOmniaFxComponentData
    @Prop() styles?: typeof HelloOmniaFxComponentStyles;

    private HelloOmniaFxComponentClasses = StyleFlow.use(HelloOmniaFxComponentStyles);

    private name = '';
    private responseMsg = '';
    private waiting = false;

    private blockData: HelloOmniaFxBlockData = {
        data: {},
        settings: {
            header: ''
        }
    };

    created() {
        //Get the settings data
        this.settingsService.getValue(this.settingsKey).then((blockData) => {
            if (blockData) {
                this.blockData = blockData;
            }
        })

        //Register the settings component
        this.settingsService.suggestKeyRenderer(this.settingsKey, "hello-omnia-fx-setting-component");

        //Subscribe to the settings data changed event to be able to re-render the with the latest settings
        this.subscriptionHandler.add(
            this.settingsService.onKeyValueUpdated(this.settingsKey)
                .subscribe((blockData) => {
                    this.blockData = blockData;
                })
        );
    }

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    callWebAPI() {
        this.waiting = true;
        this.httpClient.get<string>('/api/test?name=' + this.name).then((response) => {
            this.waiting = false;
            this.responseMsg = response.data
        })
    }

    render(h) {
        return (
            <div class={this.HelloOmniaFxComponentClasses.container}>
                <div class='text-xs-center'>
                    {/*Render settings data*/}
                    <h1>{this.blockData.settings.header}</h1>

                    <div><v-text-field label="Name" v-model={this.name}></v-text-field></div>
                    <div><v-btn flat loading={this.waiting} onClick={this.callWebAPI}>Send</v-btn></div>
                    <div><p>{this.responseMsg}</p></div>
                </div>
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, HelloOmniaFxComponent);
});