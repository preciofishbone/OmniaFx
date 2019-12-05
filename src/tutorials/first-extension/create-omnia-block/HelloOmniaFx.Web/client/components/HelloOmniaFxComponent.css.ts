import { types } from 'typestyle';
import { StyleFlow } from '@omnia/fx/ux';

/**
 * Styles for the HelloOmniaFxComponent component
 */
export const HelloOmniaFxComponentStyles = {} as {
    container: types.NestedCSSProperties
};

StyleFlow.define(HelloOmniaFxComponentStyles, {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    }
})