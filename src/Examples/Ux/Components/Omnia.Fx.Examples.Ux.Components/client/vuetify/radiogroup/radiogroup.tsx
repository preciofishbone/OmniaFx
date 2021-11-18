import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { VueComponentBase } from '@omnia/fx/ux';


export interface RadioGroupProps {

}

@Component
export default class RadioGroup extends VueComponentBase<RadioGroupProps> {

    private value


    public mounted() { }

    public render(h) {

        return (
            <div>
                <v-radio-group onChange={(newVal) => { }} value={this.value}>
                    <v-radio color={this.theming.body.components.color.base}
                        label="Option 1" value={1}></v-radio>
                    <v-radio color={this.theming.body.components.color.base}
                        label="Option 2" value={2}></v-radio>
                </v-radio-group>
            </div >
        )
    }


}