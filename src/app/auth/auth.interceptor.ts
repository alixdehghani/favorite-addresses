import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly _authService: AuthService, private readonly _route: Router, private readonly _snackBar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    let authReq = req;
    const token = this._authService.token;
    if (token != null) {
      if (this._authService.isTokenExpired()) {
        this._authService.logout();
        this._route.navigate(['/signin/login']);
        return throwError(() => ({error: 'TOken is Expire!'}))
      } else {
        authReq = this._addTokenHeader(req, token);
      }
    }
    return next.handle(authReq).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this._authService.logout();
          this._route.navigate(['/signin/login']);
        }
        return throwError(() => error);
      })
    );
  }

  private _addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        [TOKEN_HEADER_KEY]: token,
      }
    });
  }
}