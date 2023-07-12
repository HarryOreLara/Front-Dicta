import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiCategoriaService {
  private baseUrl = environment.baseUrl;
  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }

  constructor(private http: HttpClient) {}

  read() {
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.http.get<any>(`${this.baseUrl}/categoria/read`, { headers });
  }

  create(form: any) {
    //localhost:3000/categoria/create

    console.log(form);
    const headers = {
      'x-auth-token': this.user.token,
    };

    // return this.http.post<any>(`${this.baseUrl}/categoria/create`, form, {
    //   headers,
    // });
    
    return this.http.post<any>(`${this.baseUrl}/categoria/create`, form, {
      headers,
    }).pipe(
      map((res)=>{
        return res.ok
      }),
      catchError((err)=>of(err.error.msg))
    );
  }

  update() {}

  delete() {}
}
