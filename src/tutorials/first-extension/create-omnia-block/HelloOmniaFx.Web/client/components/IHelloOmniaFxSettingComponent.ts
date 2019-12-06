import { TsxAllowUnknowProperties } from '@omnia/fx/ux';
import { HelloOmniaFxSettingComponentStyles } from './HelloOmniaFxSettingComponent.css';

export interface HelloOmniaFxSettingComponentData {
    title: string;
}

/*@WebComponentInterface("hello-omnia-fx-setting-component")*/
export interface IHelloOmniaFxSettingComponent {

    required: boolean;

    /*@DomProperty*/
    data?: HelloOmniaFxSettingComponentData;

    /*@DomProperty*/
    styles?: typeof HelloOmniaFxSettingComponentStyles;
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            /*@WebComponent*/
            "hello-omnia-fx-setting-component": TsxAllowUnknowProperties<IHelloOmniaFxSettingComponent>
        }
    }
}