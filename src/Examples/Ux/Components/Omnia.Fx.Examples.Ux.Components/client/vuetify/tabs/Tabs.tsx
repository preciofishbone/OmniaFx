import { Console } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { VueComponentBase } from '@omnia/fx/ux';

export interface TabProps {

}

@Component
export default class Tabs extends VueComponentBase<TabProps> {

    public mounted() { }

    public render(h) {
           
        return (
            <div>
                <v-tabs
                    dark={this.theming.body.bg.dark}
                    slider-color={this.theming.body.components.color.base}
                    background-color={this.theming.body.bg.color.base}
                >
                    <v-tab>
                        <v-icon
                            dark={this.theming.body.bg.dark}>fal fa-copy</v-icon>
                        tab 1
                    </v-tab>
                    <v-tab>
                        tab 2
                    </v-tab>
                    <v-tab-item class="mt-5">
                        tab item 1
                    </v-tab-item>
                    <v-tab-item class="mt-5">
                        tab item 2
                    </v-tab-item>
                </v-tabs>
            </div >
        )
    }


}