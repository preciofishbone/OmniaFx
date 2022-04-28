import { defineVueWebComponent, useTheme } from "@omnia/fx/ux";
import { AzureAdObjectPrincipalTypes, Identity, UserTypes } from "@omnia/fx-models";
import "./PeoplePicker.mock";

export default defineVueWebComponent({
    setup(props) {
        const { theming } = useTheme();
        const selectedAuthors: Identity[] = [
            {
                uid: "anne.reader@omniatestcloud.net",
                type: UserTypes.AzureAdInternalUser
            }
        ]

        return () => (
            <omfx-people-picker
                multiple
                dark={theming.body.bg.dark}
                label={"Authors"}
                principalType={AzureAdObjectPrincipalTypes.MemberAndGuest}
                valueBind={selectedAuthors}
                onValueChanged={(val) => console.log(val)}>
            </omfx-people-picker>
        );
    }
});