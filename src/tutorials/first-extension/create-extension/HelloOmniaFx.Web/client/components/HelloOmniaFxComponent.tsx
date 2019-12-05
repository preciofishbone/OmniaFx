import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize } from "@omnia/fx";
import { StyleFlow } from '@omnia/fx/ux';
import { IHelloOmniaFxComponent, HelloOmniaFxComponentData } from './IHelloOmniaFxComponent';
import { HelloOmniaFxComponentStyles } from './HelloOmniaFxComponent.css';

@Component
export default class HelloOmniaFxComponent extends Vue implements IWebComponentInstance, IHelloOmniaFxComponent {
    @Prop({ default: false }) required: boolean;
    @Prop({ default: { title: 'Hello from HelloOmniaFxComponent!' } }) data?: HelloOmniaFxComponentData
    @Prop() styles?: typeof HelloOmniaFxComponentStyles;

    private HelloOmniaFxComponentClasses = StyleFlow.use(HelloOmniaFxComponentStyles);

    created() {
        if (this.styles) {
            this.HelloOmniaFxComponentClasses = StyleFlow.use(HelloOmniaFxComponentStyles, this.styles);
        }
    }

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <div class={this.HelloOmniaFxComponentClasses.container}>
                Hello from Omnia Fx
        </div>
        )
    }

}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, HelloOmniaFxComponent);
    //component injects itself into document body
    document.body.appendChild(document.createElement(manifest.elementName));
});