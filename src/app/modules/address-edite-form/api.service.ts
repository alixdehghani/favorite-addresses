import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiService {
    private _editUrl!: string;
    constructor(private _httpClient: HttpClient) {}
    init(id: number) {
        this._editUrl = `${environment.baseUrl}/public-addresses/${id}`;
    }

    getPublicAddressDetail(): Observable<any> {
        return this._httpClient.get(this._editUrl);
    }

    EditPublicAddress(data: any): Observable<any> {
        return this._httpClient.put(this._editUrl, data);
    }

    deletePublicAddress(): Observable<any> {
        return this._httpClient.delete(this._editUrl);
    }
}