import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SignupInterface } from "./signup.interface";

@Injectable()
export class ApiService {
    private _signupUrl!: string;
    
    constructor(private _httpClient: HttpClient) {
        this._signupUrl = `${environment.baseUrl}/register`;
    }

    register(data: SignupInterface): Observable<{accessToken: string}> {
        return this._httpClient.post<{accessToken: string}>(this._signupUrl, data);
    }
}