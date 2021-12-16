import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpService} from "./http.service";
import {ApplicationList} from "../models/applicationList";
import {Application} from "../models/application";

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    constructor(private http: HttpService) {
    }

    getApplications(): Observable<ApplicationList> {
        return this.http.request('get', '/application');
    }

    uploadResume(formData: FormData): Observable<any> {
        return this.http.request('post', '/upload/attachment', formData, 'multipart/form-data');
    }

    createApplication(data: Application): Observable<any> {
        return this.http.request('post', '/application', data);
    }

}
