import { Console } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { VueComponentBase } from '@omnia/fx/ux';

export interface ExpansionPanelProps {

}

@Component
export default class ExpansionPanels extends VueComponentBase<ExpansionPanelProps> {

    
    public mounted() { }

    public render(h) {

        return (
            <v-expansion-panels class={this.theming.body.components.expansionPanel.css}>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h4 class="subtitle-1">
                            <v-icon class={["mr-4"]} style="position:relative;top:-2px">fal fa-sliders-v</v-icon>
                            Title 1
                        </h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content >
                        content
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        )
    }


}