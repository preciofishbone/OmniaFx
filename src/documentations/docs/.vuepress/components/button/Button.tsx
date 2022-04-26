import { defineVueWebComponent, useTheme, useCurrentVueInstance } from "@omnia/fx/ux";
import { ButtonModes, FontAwesomeIcon } from "@omnia/fx-models";


export default defineVueWebComponent({
    setup(props) {
        const { theming } = useTheme();

        return () => (
            <div>
                <omfx-button
                    dark={theming.body.bg.dark}
                    class={"mt-7 mr-2"}
                    mode={ButtonModes.flat}
                    text="Flat">
                </omfx-button>
                <omfx-button
                    dark={theming.body.bg.dark}
                    text="Raised"
                    mode={ButtonModes.raised}
                    class={"mt-7 mr-2"}>
                </omfx-button>
                <omfx-button
                    dark={theming.body.bg.dark}
                    text="Depressed"
                    mode={ButtonModes.depressed}
                    class={"mt-7 mr-2"}>
                </omfx-button>
                <omfx-button
                    dark={theming.body.bg.dark}
                    class={"mt-7 mr-2"}
                    mode={ButtonModes.icon}
                    icon={{
                        iconType: new FontAwesomeIcon("delete")
                    }}>
                </omfx-button>
            </div>
        );
    }
});