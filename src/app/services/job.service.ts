import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from "./http.service";
import {JobList} from "../models/jobList";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpService) {
  }

  getJobs(): Observable<JobList> {
    return this.http.request('get', '/job');
  }

}
