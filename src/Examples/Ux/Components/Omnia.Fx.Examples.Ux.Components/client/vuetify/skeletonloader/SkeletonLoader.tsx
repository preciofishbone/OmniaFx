import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { VueComponentBase } from '@omnia/fx/ux';


export interface SkeletonLoaderProps {

}

@Component
export default class SkeletonLoader extends VueComponentBase<SkeletonLoaderProps> {

    
    public mounted() { }

    public render(h) {

        return (
            <div>
                <v-skeleton-loader
                    loading={true}
                    class={this.theming.chrome.components.skeletonLoader.css}
                    height="100%"
                    type="list-item-avatar"
                >
                    <div>
                        
                    </div>
                </v-skeleton-loader>                        
            </div >
        )
    }


}