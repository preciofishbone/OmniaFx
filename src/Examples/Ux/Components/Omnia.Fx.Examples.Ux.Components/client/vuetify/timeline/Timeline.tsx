import { Console } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { VueComponentBase } from '@omnia/fx/ux';

export interface TimelineProps {

}

@Component
export default class Timeline extends VueComponentBase<TimelineProps> {

    public mounted() { }

    public render(h) {
        return (
            <div>
                <div>Timeline Component</div>
                <v-timeline
                    dense
                    dark={this.theming.body.bg.dark}
                    clipped>
                    <v-timeline-item
                        fill-dot
                        
                        class="white--text mb-12"
                        color="orange"
                        large
                    >
                        Hello
                </v-timeline-item>

                </v-timeline>
            </div >
        )
    }


}