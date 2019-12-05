import { TsxAllowUnknowProperties } from '@omnia/fx/ux';
import { HelloOmniaFxComponentStyles } from './HelloOmniaFxComponent.css';

export interface HelloOmniaFxComponentData {
    title: string;
}

/*@WebComponentInterface("hello-omnia-fx-component")*/
export interface IHelloOmniaFxComponent {

    required: boolean;

    /*@DomProperty*/
    data?: HelloOmniaFxComponentData;

    /*@DomProperty*/
    styles?: typeof HelloOmniaFxComponentStyles;
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            /*@WebComponent*/
            "hello-omnia-fx-component": TsxAllowUnknowProperties<IHelloOmniaFxComponent>
        }
    }
}