import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = environment.baseUrl;
  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }

  constructor(private http:HttpClient) { }

  getPoust(){
    return this.http.get<any>(`${this.baseUrl}/poust/read`);
  }

  createPoust(form:any){
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.http
    .post<any>(`${this.baseUrl}/poust/create`, form, {
      headers,
    })
    .pipe(
      map((res) => {
        return res.ok;
      }),
      catchError((err) => of(err.error.msg))
    );
  }

  updatePoust(){

  }

  deletePoust(){

  }


}
