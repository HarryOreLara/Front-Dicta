import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {

  private baseUrl = environment.baseUrl;
  private _user:any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }

  constructor(private http:HttpClient) { }

  getAllPoust(){
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.http.get<any>(`${this.baseUrl}/poust/read`, {headers});
  }
  
}
