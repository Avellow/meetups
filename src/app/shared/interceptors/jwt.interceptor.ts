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
    // HARDCODE рефактор!!!!!!!!!!!!!
    const token = env.apiKey;

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      })
    }

    return next.handle(request);
  }
}
