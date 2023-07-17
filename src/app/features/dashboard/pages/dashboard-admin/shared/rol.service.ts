import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private baseUrl = environment.baseUrl;
  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }


  constructor(private http:HttpClient) { }


  
  create(form:any ){
    const headers = {
      'x-auth-token': this.user.token,
    };


    //console.log(form)
    return this.http.post<any>(`${this.baseUrl}/rol/create`,form, { headers }).pipe(
      map((res)=>{
        return res.ok
      }),
      catchError((err)=>of(err.error.msg))
    );
  }



   readAll(){
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.http.get<any>(`${this.baseUrl}/rol/read`, { headers })
   }


   readOne(idRol:string){
    return this.http.get<any>(`http://localhost:3000/rol/readone/${idRol}`)
   }
}
