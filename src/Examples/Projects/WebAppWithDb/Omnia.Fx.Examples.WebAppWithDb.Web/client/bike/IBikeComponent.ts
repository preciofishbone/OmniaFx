import { TsxAllowUnknowProperties } from '@omnia/fx/ux'

export interface BikeComponentData {
    title: string;
}

/*@WebComponentInterface("WebAppWithDb-bike")*/
export interface IBikeComponent {

    required: boolean;

    /*@DomProperty*/
    data?: BikeComponentData;
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            /*@WebComponent*/
            "WebAppWithDb-bike": TsxAllowUnknowProperties<IBikeComponent>
        }
    }
}