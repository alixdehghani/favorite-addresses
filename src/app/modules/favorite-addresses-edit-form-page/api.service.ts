import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiService {
    private _baseUrl!: string;
    constructor(private _httpClient: HttpClient) {}
    init(id: number) {
        this._baseUrl = `${environment.baseUrl}/favorite-addresses/${id}`;
    }

    getPublicAddressDetail(): Observable<any> {
        return this._httpClient.get(this._baseUrl);
    }

    EditPublicAddress(data: any): Observable<any> {
        return this._httpClient.put(this._baseUrl, data);
    }

    deletePublicAddress(): Observable<any> {
        return this._httpClient.delete(this._baseUrl);
    }
}