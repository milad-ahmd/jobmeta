import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpService} from "./http.service";
import {ApplicationList} from "../models/applicationList";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpService) {
  }

  getApplications(): Observable<ApplicationList> {
    return this.http.request('get', '/application');
  }

}
