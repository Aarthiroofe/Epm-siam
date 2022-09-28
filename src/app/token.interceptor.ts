import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let ApiService:string | undefined = localStorage.getItem ('token')||undefined
    let tokenizedReq = request.clone({
      setHeaders:{ Authorization: `Bearer `+ ApiService
    }
    })
    return next.handle(tokenizedReq)
  }
}
