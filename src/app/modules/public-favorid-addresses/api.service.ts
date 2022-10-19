import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { createPublicAddressInterface, readPublicAddressInterface, updatePublicAddressInterface } from "./public-address.interface";

@Injectable()
export class ApiService {
    private _publicAddressesUrl!: string;
    constructor(private _httpClient: HttpClient) {
        this._publicAddressesUrl = `${environment.baseUrl}/public-addresses`;
    }

    readPublicAddresses(): Observable<readPublicAddressInterface[]> {
        return this._httpClient.get<readPublicAddressInterface[]>(this._publicAddressesUrl);
    }

    cratePublicAddresses(addr: createPublicAddressInterface): Observable<readPublicAddressInterface> {
        return this._httpClient.post<readPublicAddressInterface>(this._publicAddressesUrl, addr);
    }

    updatePublicAddress(id: number, addr: updatePublicAddressInterface): Observable<readPublicAddressInterface> {
        return this._httpClient.put<readPublicAddressInterface>(`${this._publicAddressesUrl}/${id}`, addr);
    }

    deletePublicAddress(id: number): Observable<void> {
        return this._httpClient.delete<void>(`${this._publicAddressesUrl}/${id}`);
    }

}