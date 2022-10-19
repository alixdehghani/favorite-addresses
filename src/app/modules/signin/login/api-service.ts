import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginInterface } from "./login.interface";

@Injectable()
export class ApiService {
    private _loginUrl!: string;

    constructor(private _httpClient: HttpClient) {
        this._loginUrl = `${environment.baseUrl}/login`;
    }

    login(data: LoginInterface): Observable<{accessToken: string}> {
        return this._httpClient.post<{accessToken: string}>(this._loginUrl, data);
    }
}