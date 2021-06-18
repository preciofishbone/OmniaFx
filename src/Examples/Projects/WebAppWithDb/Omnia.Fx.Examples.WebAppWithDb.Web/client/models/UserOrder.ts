import { Identity, UserTypes } from '@omnia/fx-models';
import { BasicBike } from './BasicBike';

export interface UserOrder {
    readonly user: Identity;
    readonly orderedBikes: Array<BasicBike>;
}