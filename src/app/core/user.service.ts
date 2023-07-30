import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    setUserInfo(email: string | null, id: string): void {
        localStorage.setItem('email', email || '');
        localStorage.setItem('id', id);
    }

    get email(): string {
        const t = localStorage.getItem("email");
        if (t)
            return t;
        else {
            return '';
        }
    }

    get id(): string {
        const t = localStorage.getItem("id");
        if (t)
            return t;
        else {
            return '';
        }
    }


    clearData(): void {
        localStorage.removeItem('id');
        localStorage.removeItem('email');
    }
}