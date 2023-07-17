import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  private baseUrl = environment.baseUrl;
  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }
  constructor(private http:HttpClient) { }

  create(form:any){
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.http.post<any>(`${this.baseUrl}/trabajador/create`, form, {headers}).pipe(
      map((res)=>{
        return res.ok
      }),
      catchError((err)=>of(err.error.msg))
    );
  }

  getOne(){

  }

  getAll(){
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.http.get<any>(`${this.baseUrl}/trabajador/read`, { headers })
  }

  update(){

  }


  delete(){

  }
}
