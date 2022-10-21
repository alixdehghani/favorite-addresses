export interface readFavoriteAddressInterface {
    address: string;
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export interface createFavoriteAddressInterface {
    userId: number;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
}

export interface updateFavoriteAddressInterface extends createFavoriteAddressInterface {

}