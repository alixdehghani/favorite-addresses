import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SearchGeocodingInterface } from "./search-geocoding.interface";

@Injectable()
export class ApiService {
    private readonly _searchUrl: string;
    constructor(private _httpClient: HttpClient) {
        this._searchUrl = environment.searchGeocodingUrl;
    }

    search(value: string): Observable<SearchGeocodingInterface[]> {
        return this._httpClient.get<SearchGeocodingInterface[]>(`${this._searchUrl}/${value}`, {params: {format: 'json'}});
    }
}