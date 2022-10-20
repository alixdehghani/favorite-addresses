export interface readPublicAddressInterface {
    address: string;
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export interface createPublicAddressInterface {
    address: string;
    latitude: number;
    longitude: number;
}

export interface updatePublicAddressInterface extends createPublicAddressInterface {

}