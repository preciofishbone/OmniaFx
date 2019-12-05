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
        //Full screen styles
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        color: 'black',
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    }
})