import { defineComponent } from 'vue';
import { ButtonModes, FontAwesomeIcon, ButtonIconPosition } from "@omnia/fx-models";

export default defineComponent({
    setup(props) {
        const userMode = localStorage.getItem('vuepress-color-scheme');
        const dark = userMode === "dark";
        return () => (
            <div>
                <omfx-button
                    dark={dark}
                    class={"mt-7 mr-2"}
                    mode={ButtonModes.flat}
                    text="Flat">
                </omfx-button>
                <omfx-button
                    dark={dark}
                    text="Raised"
                    mode={ButtonModes.raised}
                    class={"mt-7 mr-2"} >
                </omfx-button>
                <omfx-button
                    dark={dark}
                    text="Depressed"
                    mode={ButtonModes.depressed}
                    class={"mt-7 mr-2"} >
                </omfx-button>
                <omfx-button
                    dark={dark}
                    class={"mt-7 mr-2"}
                    mode={ButtonModes.icon}
                    icon={{
                        iconType: new FontAwesomeIcon("delete")
                    }} >
                </omfx-button>
            </div>
        )
    }
})