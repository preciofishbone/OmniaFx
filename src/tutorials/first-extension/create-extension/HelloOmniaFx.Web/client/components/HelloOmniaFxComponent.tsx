import { WebComponentBootstrapper, vueCustomElement } from "@omnia/fx";
import { StyleFlow, defineVueWebComponent, definePropObjectType } from "@omnia/fx/ux";
import HelloOmniaFxComponentStyles from "./HelloOmniaFxComponent.css";

interface HelloOmniaFxComponentData {
    title: string;
}

const HelloOmniaFxComponent = defineVueWebComponent({
    props: {
        required: {
            type: Boolean,
            required: true
        },
        data: {
            type: definePropObjectType<HelloOmniaFxComponentData>(),
            default: { title: "Hello from Omnia Fx!" }
        },
        styles: {
            type: definePropObjectType<typeof HelloOmniaFxComponentStyles>()
        }
    },
    setup(props) {
        const HelloOmniaFxComponentClasses = StyleFlow.use(HelloOmniaFxComponentStyles, props.styles);

        return () => (
            <div class={HelloOmniaFxComponentClasses.container}>
                <div>{props.data.title}</div>
                {props.required ? <div>Im required</div> : null}
            </div>
        );
    }
});
export default HelloOmniaFxComponent;

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, HelloOmniaFxComponent);
    //component injects itself into omnia-body wrapper div
    const omniaBodyElement = document.getElementById("omnia-body");
    omniaBodyElement.appendChild(document.createElement(manifest.elementName));
});
