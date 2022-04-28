import { defineVueWebComponent, useTheme, useTransformVSlot } from "@omnia/fx/ux";
import { ButtonModes } from "@omnia/fx-models";

export default defineVueWebComponent({
    setup(props) {
        const { theming } = useTheme();

        return () => (
            <div>
                <v-tooltip
                    bottom
                    {...useTransformVSlot({
                        activator: (ref) => {
                            const toSpread = {
                                on: ref.on
                            };

                            return [
                                <span {...toSpread}>
                                    <omfx-button
                                        dark={theming.body.bg.dark}
                                        class={"mt-7 mr-2"}
                                        mode={ButtonModes.flat}
                                        text="Bottom">
                                    </omfx-button>
                                </span>
                            ];
                        }
                    })}>
                    <span>My Tooltip</span>
                </v-tooltip>
                <v-tooltip
                    top
                    {...useTransformVSlot({
                        activator: (ref) => {
                            const toSpread = {
                                on: ref.on
                            };
                            return [
                                <span {...toSpread}>
                                    <omfx-button
                                        dark={theming.body.bg.dark}
                                        class={"mt-7 mr-2"}
                                        mode={ButtonModes.flat}
                                        text="Top">
                                    </omfx-button>
                                </span>
                            ];
                        }
                    })}>
                    <span>My Tooltip</span>
                </v-tooltip>
            </div>
        );
    }
});