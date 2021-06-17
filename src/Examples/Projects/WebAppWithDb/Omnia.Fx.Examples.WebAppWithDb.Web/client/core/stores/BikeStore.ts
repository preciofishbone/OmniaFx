import { Injectable, Inject, OmniaContext, ResolvablePromise } from '@omnia/fx';
import { AzureAdUser, InstanceLifetimes} from '@omnia/fx-models';
import { BasicBike, BikeType } from '../../models';
import { BikeService } from '../services/BikeService';
import { UserStore,Store } from '@omnia/fx/stores';

@Injectable({
    onStartup: (storeType) => { Store.register(storeType, InstanceLifetimes.Scoped) }
})
export class BikeStore extends Store {

    @Inject(BikeService) private bikeService: BikeService;
    @Inject(OmniaContext) private omniaCtx: OmniaContext;
    @Inject(UserStore) private userStore: UserStore;
    
    private currentUser: AzureAdUser;
    private bikesOrdersState = this.state<{ [userId: string]: Array<BasicBike> }>({});
    private availableBikes = this.state<Array<BasicBike>>([]);
    private availableBikesPromise = new ResolvablePromise<null>();

    constructor() {
        super({
            id: "7261777c-2b9d-4831-b271-46b4b1248a4a"
        });
    }

    async onActivated() {
        this.userStore.current.then(currentUer => {
            this.currentUser = currentUer as AzureAdUser;
        })

        this.bikesOrdersState.state[this.currentUser.uid] = [];
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
            return this.currentUser ? this.bikesOrdersState.state[this.currentUser.uid] : [];
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
                    if (!orders.state[user.uid]) {
                        orders.state[user.uid] = [];
                    }
                    orders.state[user.uid].push(orderedBike);
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

