import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, public router: Router) {
  }

  public request(
    method: string,
    url: string,
    data: any = null,
    contentType = 'application/json'
  ): any {
    let headers = new HttpHeaders({
      'Content-Type': contentType,
    });
    if (contentType === 'multipart/form-data') {
      headers = headers.delete('Content-Type');
    }
    if (data) {
      if (method === 'post') {
        return this.http.post(`${this.baseUrl}${url}`, data, {
          headers,
          withCredentials: true
        });
      }
      if (method === 'put') {
        return this.http.put(`${this.baseUrl}${url}`, data, {
          headers,
          withCredentials: true
        });
      }
    }
    if (method === 'get') {
      return this.http.get(`${this.baseUrl}${url}`, {
        headers,
        withCredentials: true
      });
    }
    if (method === 'delete') {
      return this.http.delete(`${this.baseUrl}${url}`, {
        headers,
        withCredentials: true
      });
    }

  }

}
