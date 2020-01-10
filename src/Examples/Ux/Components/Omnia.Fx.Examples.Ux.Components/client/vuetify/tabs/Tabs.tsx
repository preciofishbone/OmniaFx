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
                    dark={this.theming.header.bg.dark}
                    slider-color={this.theming.header.components.color}
                    background-color={this.theming.header.bg.color}
                >
                    <v-tab>
                        <v-icon
                            dark={this.theming.header.bg.dark}
                            color={this.theming.header.text.color.base}>fal fa-copy</v-icon>
                        tab 1
                    </v-tab>
                    <v-tab>
                        tab 2
                    </v-tab>
                    <v-tab-item>
                        tab item 1
                    </v-tab-item>
                    <v-tab-item>
                        tab item 2
                    </v-tab-item>
                </v-tabs>
            </div >
        )
    }


}