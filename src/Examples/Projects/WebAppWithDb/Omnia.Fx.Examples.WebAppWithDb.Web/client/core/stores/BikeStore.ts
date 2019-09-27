import { Store } from '@omnia/fx/store';
import { Injectable, Inject, OmniaContext, ResolvablePromise } from '@omnia/fx';
import { InstanceLifetimes, OmniaUserContext } from '@omnia/fx-models';
import { BasicBike, BikeType } from '../../models';
import { BikeService } from '../services/BikeService';

@Injectable({
    onStartup: (storeType) => { Store.register(storeType, InstanceLifetimes.Scoped) }
})
export class BikeStore extends Store {

    @Inject(BikeService) private bikeService: BikeService;
    @Inject(OmniaContext) private omniaCtx: OmniaContext;

    private currentUser: OmniaUserContext;
    private bikesOrdersState = this.state<{ [userId: string]: Array<BasicBike> }>({});
    private availableBikes = this.state<Array<BasicBike>>([]);
    private availableBikesPromise = new ResolvablePromise<null>();

    constructor() {
        super({
            id: "7261777c-2b9d-4831-b271-46b4b1248a4a"
        });
    }

    async onActivated() {
        this.currentUser = await this.omniaCtx.user;
        this.bikesOrdersState.state[this.currentUser.id] = [];
    }

    onDisposing() {
        //Called when the store is disposed, do some cleanup here
    }

    /**
    * Implementation of getters
    */
    getters = {
        getOrdersByUserId: (userId: string) => {
            return this.bikesOrdersState.state[userId];
        },
        getUserOrders: () => {
            return this.bikesOrdersState.state[this.currentUser.id];
        },
        getAvailable: () => {
            return this.availableBikes.state;
        }
    }

    /**
     * Implementation of mutations
     */
    mutations = {
        //orderBike: (userName: string, newBike: BasicBike => {
        //    this.bikesOrders.mutate((bikes) => {
        //        bikes.state.push(newBike);
        //    });
        //}
    }
    /**
     * Implementation of actions
     */
    actions = {
        loadOrders: this.action(() => {
            return new Promise<null>(async (resolve, reject) => {
                let orders = await this.bikeService.getAllOrders();
                this.bikesOrdersState.mutate(orders);
                Promise.resolve(null);
            });
        }),
        order: this.action((bikeToOrder: BasicBike) => {
            return new Promise<null>(async (resolve, reject) => {

                let orderedBike = await this.bikeService.order(bikeToOrder);
                let user = await this.omniaCtx.user;

                this.bikesOrdersState.mutate((orders) => {
                    if (!orders.state[user.id]) {
                        orders.state[user.id] = [];
                    }
                    orders.state[user.id].push(orderedBike);
                })

                Promise.resolve(null);
                 
            });
        }),
        loadAvailable: this.action(() => {

            if (!(this.availableBikesPromise.resolving || this.availableBikesPromise.resolved)) {

                this.availableBikesPromise.resolving = true;
                this.bikeService.getAvailable()
                    .then((result) => {
                        this.availableBikes.mutate(result);
                        this.availableBikesPromise.resolve(null);
                    })
                    .catch(this.availableBikesPromise.reject)
            }

            return this.availableBikesPromise.promise;

        }),
    }

}

