import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  update(id: string){

  }

  delete(id: string){

  }

}
