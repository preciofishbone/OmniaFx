import { Console } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { VueComponentBase } from '@omnia/fx/ux';

export interface SwitchProps {

}

@Component
export default class Switch extends VueComponentBase<SwitchProps> {

    public mounted() { }

    public render(h) {            
        return (
            <div>
                <v-switch
                    label="try me"
                    color={this.theming.body.components.color.base}>
                </v-switch>
            </div >
        )
    }


}