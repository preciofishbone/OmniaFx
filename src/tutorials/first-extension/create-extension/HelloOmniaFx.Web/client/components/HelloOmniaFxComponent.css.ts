import { types } from "typestyle";
import { StyleFlow } from "@omnia/fx/ux";

export default StyleFlow.define({
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

