import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject, HttpClientConstructor, HttpClient } from "@omnia/fx";
import { StyleFlow } from '@omnia/fx/ux';
import { IHelloOmniaFxComponent, HelloOmniaFxComponentData } from './IHelloOmniaFxComponent';
import { HelloOmniaFxComponentStyles } from './HelloOmniaFxComponent.css';

@Component
export default class HelloOmniaFxComponent extends Vue implements IWebComponentInstance, IHelloOmniaFxComponent {

    @Inject<HttpClientConstructor>(HttpClient, {
        configPromise: HttpClient.createOmniaServiceRequestConfig('{service id}')
    }) private httpClient: HttpClient;

    @Prop({ default: false }) required: boolean;
    @Prop({ default: { title: 'Hello from HelloOmniaFxComponent!' } }) data?: HelloOmniaFxComponentData
    @Prop() styles?: typeof HelloOmniaFxComponentStyles;

    private HelloOmniaFxComponentClasses = StyleFlow.use(HelloOmniaFxComponentStyles);

    private name = '';
    private responseMsg = '';
    private waiting = false;
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
                    <div><v-text-field label="Name" v-model={this.name}></v-text-field></div>
                    <div><v-btn flat loading={this.waiting} onClick={this.callWebAPI}>Send</v-btn></div>
                    <div><p>{this.responseMsg}</p></div>
                </div>
            </div>
        )
    }

    created() {
        if (this.styles) {
            this.HelloOmniaFxComponentClasses = StyleFlow.use(HelloOmniaFxComponentStyles, this.styles);
        }
    }

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, HelloOmniaFxComponent);
    //component injects itself into document body
    document.body.appendChild(document.createElement(manifest.elementName));
});