import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  employeeid:any 
  constructor(private http:HttpClient) {
    this.employeeid = localStorage.getItem('empid')
   }

  login(data:any):Observable<any>{
    console.log(data);
    return this.http.post<any>
    (environment.apiurl+'/auth/user/login/',data)
  }
  profile(data:any):Observable<any>{
    console.log(data);
    return this.http.post<any>(environment.apiurl+'/employee/employee/1/register/',data)
    }
  status(data:any):Observable<any>{
    return this.http.post<any>(environment.apiurl+'/employee/employmentstatus/2/'+this.employeeid+'/register/',data)
  }  
  position(data:any):Observable<any>{
    return this.http.post<any>(environment.apiurl+'/employee/employmentposition/3/'+this.employeeid+'/register/',data)
  }
}
