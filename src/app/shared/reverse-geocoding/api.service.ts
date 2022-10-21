import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ReverseGeocodingInterface } from "./reverse-geocoding.interface";

@Injectable()
export class ApiService {
    private readonly _reversehUrl: string;
    constructor(private _httpClient: HttpClient) {
        this._reversehUrl = environment.reverseGeocodingUrl;
    }

    reverse(lat: number, lon: number): Observable<ReverseGeocodingInterface> {
        return this._httpClient.get<ReverseGeocodingInterface>(this._reversehUrl, {params: {format: 'json', lat: lat, lon: lon}});
    }
}