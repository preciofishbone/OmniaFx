import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject } from "@omnia/fx";
import { StyleFlow } from '@omnia/fx/ux';
import { IVuetifyExamplesComponent, VuetifyExamplesComponentData } from './IVuetifyExamplesComponent';
import { VuetifyExamplesComponentStyles } from './VuetifyExamplesComponent.css';
import Timeline from './timeline/Timeline';

@Component
export default class VuetifyExamplesComponent extends Vue implements IWebComponentInstance, IVuetifyExamplesComponent {

    @Prop({ default: false }) required: boolean;
    @Prop({ default: { title: 'Hello from VuetifyExamplesComponent!' } }) data?: VuetifyExamplesComponentData
    @Prop() styles?: typeof VuetifyExamplesComponentStyles;

    private VuetifyExamplesComponentClasses = StyleFlow.use(VuetifyExamplesComponentStyles);

    created() {
        if (this.styles) {
            this.VuetifyExamplesComponentClasses = StyleFlow.use(VuetifyExamplesComponentStyles, this.styles);
        }
    }

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <div class={this.VuetifyExamplesComponentClasses.container}>
                <Timeline />
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, VuetifyExamplesComponent);
});