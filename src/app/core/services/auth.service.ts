import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap,BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;

  private _user:any = null;//json

  get user(){
    return this._user;
  }

  constructor(private httpClient:HttpClient) { }

  loginService(data:any): Observable<any>{
    let direccion = this.baseUrl+"/auth/login";
    return this.httpClient.post<any>(direccion, data).pipe(
      tap((res)=>{
        if (res.ok===true) {
          this._user = {
            id: res.id,
            username: res.username,
            rol: res.rol,
            token: res.token,
          };
        }else{
          this._user = null
        }
      }),
      map((res)=>{
        return res.ok;
      }),
      catchError((err)=>of(err.error.msg))
    );
  }


  registerService(data:any): Observable<any>{
    let direccion = this.baseUrl+"/auth/register";

    return this.httpClient.post<any>(direccion, data).pipe(
      tap((res)=>{
        if (res.ok === true) {
          this._user = {
            id:res.id,
            username: res.username,
            rol: res.rol,
            token: res.token
          }
        }
      })
    )
  }



}
