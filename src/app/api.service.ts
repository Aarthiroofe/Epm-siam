import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    console.log(data);
    return this.http.post<any>
    (environment.apiurl+'/auth/user/login/',data)
    
  }
}
