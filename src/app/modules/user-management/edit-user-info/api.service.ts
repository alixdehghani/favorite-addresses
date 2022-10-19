import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { EditUserInterface } from "./edit-user.interface";
import { GetUserInterface } from "./get-user.interface";

@Injectable()
export class ApiService {
    private _userUrl!: string;
    constructor(private _httpClient: HttpClient) {
        this._userUrl = `${environment.baseUrl}/users`;
    }

    getUser(id: string): Observable<GetUserInterface> {
        return this._httpClient.get<GetUserInterface>(`${this._userUrl}/${id}`);
    }

    editUser(data: EditUserInterface): Observable<GetUserInterface> {
        return this._httpClient.patch<GetUserInterface>(`${this._userUrl}/${data.id}`,data);
    }
}