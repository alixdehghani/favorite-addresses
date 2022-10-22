import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { readFavoriteAddressInterface, createFavoriteAddressInterface, updateFavoriteAddressInterface } from "./favorite-address.interface";

@Injectable()
export class ApiService {
    private _favorteAddressesUrl!: string;
    constructor(private _httpClient: HttpClient) {
        this._favorteAddressesUrl = `${environment.baseUrl}/favorite-addresses`;
    }

    readFavorteAddresses(): Observable<readFavoriteAddressInterface[]> {
        return this._httpClient.get<readFavoriteAddressInterface[]>(`${this._favorteAddressesUrl}`);
    }

    crateFavorteAddresses(addr: createFavoriteAddressInterface): Observable<readFavoriteAddressInterface> {
        return this._httpClient.post<readFavoriteAddressInterface>(this._favorteAddressesUrl, addr);
    }

}