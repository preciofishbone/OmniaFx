import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject, OmniaContext } from "@omnia/fx";
import { IBikeComponent, BikeComponentData } from './IBikeComponent';
import { BikeComponentStyles } from './BikeComponent.css';
import { VBtn } from '@omnia/fx/ux/vuetify';
import { BasicBike, BikeType } from '../models';
import { OmniaTheming } from '@omnia/fx/ux';
import { BikeService } from '../core/services';

@Component
export default class BikeComponent extends Vue implements IWebComponentInstance, IBikeComponent {

    @Prop({ default: false }) required: boolean;

    @Inject(BikeService) private bikeService: BikeService;
    @Inject(OmniaTheming) private omniaTheming: OmniaTheming;
    @Inject(OmniaContext) private omniaCtx: OmniaContext;

    private selectedBike: BasicBike;
    private availableBikes: Array<BasicBike> = [];
    private orderedBikes: Array<BasicBike> = [];

    created() {
        this.bikeService.getAvailable().then((avail) => {
            this.availableBikes = avail;
        });
        this.bikeService.getAllOrders().then(async (all) => {

            let user = await this.omniaCtx.user;
            if (all[user.id]) {
                this.orderedBikes = all[user.id];
            }

        });

    }

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    private orderBike() {
        this
            .bikeService
            .order(this.selectedBike).then((orderedBike) => {
                this.orderedBikes.push(orderedBike);
            });
    }

    render(h) {
        return (
            <div class={BikeComponentStyles.container}>
                <div> 
                    <div class="d-inline-block" style="width: 300px;">
                        <v-select
                            dark={this.omniaTheming.promoted.body.dark}
                            item-value="id"
                            item-text="brand"
                            items={this.availableBikes}
                            v-model={this.selectedBike}
                            label="Select a bike"
                            return-object
                            onChange={(o) => { console.dir(this.selectedBike); }}>
                        </v-select>
                    </div> 
                    <div class="d-inline-block">
                        <VBtn flat onClick={() => { this.orderBike() }}>
                            Order
                    </VBtn>
                    </div>
                </div>
                <div>Ordered bikess</div>
                {
                    this.orderedBikes.map((bike) => {
                        return <div>
                            {bike.brand}
                        </div>
                    })
                }
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, BikeComponent);
});