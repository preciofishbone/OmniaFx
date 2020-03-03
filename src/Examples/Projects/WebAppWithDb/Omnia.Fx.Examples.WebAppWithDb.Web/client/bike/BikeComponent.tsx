import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject } from "@omnia/fx";
import { IBikeComponent, BikeComponentData } from './IBikeComponent';
import { BikeComponentStyles } from './BikeComponent.css';
import { BikeStore } from '../core/stores';
import { OmniaTheming } from '@omnia/fx/ux';
import { BasicBike } from '../models';

@Component
export default class BikeComponent extends Vue implements IWebComponentInstance, IBikeComponent {

    @Prop({ default: false }) required: boolean;

    @Inject(BikeStore) private bikeStore: BikeStore;
    @Inject(OmniaTheming) private omniaTheming: OmniaTheming;

    private selectedBike: BasicBike;

    created() {
        this
            .bikeStore
            .actions
            .loadOrders
            .dispatch();

        this
            .bikeStore
            .actions
            .loadAvailable
            .dispatch();
    }

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    private orderBike() {
        this
            .bikeStore
            .actions
            .order
            .dispatch(this.selectedBike);
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
                            items={this.bikeStore.getters.getAvailable()}
                            v-model={this.selectedBike}
                            label="Select a bike"
                            return-object
                            onChange={(o) => { console.dir(this.selectedBike); }}>
                        </v-select>
                    </div>
                    <div class="d-inline-block">
                        <v-btn flat onClick={() => { this.orderBike() }}>
                            Order
                    </v-btn>
                    </div>
                </div>
                <div>Ordered bikes</div>
                {
                    this.bikeStore.getters.getUserOrders() ?
                        this.bikeStore.getters.getUserOrders().map((bike) => {
                            return <div>
                                {bike.brand}
                            </div>
                        }) :
                        null
                }
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, BikeComponent);
});