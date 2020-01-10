import { Console } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { VueComponentBase } from '@omnia/fx/ux';

export interface SliderProps {

}

@Component
export default class Slider extends VueComponentBase<SliderProps> {

    
    public mounted() { }

    public render(h) {

        return (
            <div>
                <v-slider
                    label="testing"
                    min="0"
                    max="300"
                    color={this.theming.content.components.color.base}
                    track-color={this.theming.content.components.color.lighten3}
                >
                </v-slider>
            </div>
        )
    }


}