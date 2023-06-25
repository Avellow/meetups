import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment.development';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem(env.LS_API_KEY);

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      })
    }

    return next.handle(request);
  }
}
