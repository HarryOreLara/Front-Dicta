import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl;
  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }


  constructor( private http:HttpClient) { }


  read(){
    const headers = {
      'x-auth-token':this.user.token
    };
    return this.http.get<any>(`${this.baseUrl}/accessUsers/read`, {headers});
  }

  readOne(id:string){
    const headers = {
      'x-auth-token':this.user.token
    };

    return this.http.get<any>(`${this.baseUrl}/accessUsers/readone/${id}`, {headers});
  }
  update(form:any,id: string){
    const headers = {
      'x-auth-token':this.user.token
    };

    return this.http.put<any>(`${this.baseUrl}/accessUsers/update/${id}`, form, {headers}).pipe(
      map((res)=>{
        return res.ok
      }),
      catchError((err)=>of(err.error.msg))
    );
  }

  delete(id: string){
    const headers = {
      'x-auth-token':this.user.token
    };

    return this.http.delete<any>(`${this.baseUrl}/accessUsers/delete/${id}`, {headers}).pipe(
      map((res)=>{
        return res.ok
      }),
      catchError((err)=>of(err.error.msg))
    )
  }

}
