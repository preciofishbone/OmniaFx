export enum BikeType {
    BMX = 0,
    Comfort = 1
}

export interface BasicBike {
    type: BikeType;
    brand: string;
}