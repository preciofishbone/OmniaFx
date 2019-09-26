import { TsxAllowUnknowProperties } from '@omnia/fx/ux'
import { AppProvisioningStepContext } from '@omnia/fx/models';

/*@WebComponentInterface("omfx-examples-approvisioning-step-introduction")*/
export interface IIntroductionStep {
    /*@DomProperty*/
    context: AppProvisioningStepContext;

    /*@DomProperty*/
    registerOnGoToNext: (onGoToNext: () => Promise<boolean>) => void;

    /*@DomProperty*/
    registerOnGoToPrev: (onGoToPrev: () => Promise<boolean>) => void;
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            /*@WebComponent*/
            "omfx-examples-approvisioning-step-introduction": TsxAllowUnknowProperties<IIntroductionStep>
        }
    }
}