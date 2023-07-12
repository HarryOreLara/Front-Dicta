import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiEtiquetaService {
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

    return this.http.get<any>(`${this.baseUrl}/etiqueta/read`, { headers });
  }

  create(form: any) {
    const headers = {
      'x-auth-token': this.user.token,
    };

    // return this.http.post<any>(`${this.baseUrl}/etiqueta/create`, form, {
    //   headers,
    // });

    return this.http.post<any>(`${this.baseUrl}/etiqueta/create`, form, {
      headers,
    }).pipe(
      map((res)=>{
        return res.ok
      }),
      catchError((err)=>of(err.error.msg))
    );
  }
}
