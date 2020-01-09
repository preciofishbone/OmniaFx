import { TsxAllowUnknowProperties } from '@omnia/fx/ux';
import { VuetifyExamplesComponentStyles } from './VuetifyExamplesComponent.css';

export interface VuetifyExamplesComponentData {
    title: string;
}

/*@WebComponentInterface("fxex-vuetify-examples")*/
export interface IVuetifyExamplesComponent {

    required: boolean;

    /*@DomProperty*/
    data?: VuetifyExamplesComponentData;

    /*@DomProperty*/
    styles?: typeof VuetifyExamplesComponentStyles;
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            /*@WebComponent*/
            "fxex-vuetify-examples": TsxAllowUnknowProperties<IVuetifyExamplesComponent>
        }
    }
}