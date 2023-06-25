import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this
      .http
      .post<{ token: string }>(`${env.baseURL}/auth/login`, { email, password })
      .pipe(
        map(this.handleSuccess),
        catchError(this.handleError),
      );
  }

  logout(): void {
    localStorage.removeItem(env.LS_API_KEY);
    //this.routes.navigate([PagesPathEnum.LOGIN]);
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get user() {
    const token = localStorage.getItem(env.LS_API_KEY);
    if (token) {
      const user = this.parseJwt(token)
      return user;
    } else {
      return null
    }
  }

  public get token(): string | null {
    return localStorage.getItem(env.LS_API_KEY);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let error = errorRes.error ? errorRes.error : 'unknown error';
    let errorMsg: string;
    if (Array.isArray(error)) {
      errorMsg = error[0];
    } else if (error.message) {
      errorMsg = error.message;
    } else {
      errorMsg = JSON.stringify(error);
    }
    return throwError(() => errorMsg);
  }

  private handleSuccess({ token }: { token?: string }) {
    if (token) {
      localStorage.setItem(env.LS_API_KEY, token);
    }
  }
}
