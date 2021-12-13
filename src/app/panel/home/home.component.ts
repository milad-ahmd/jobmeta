import {Component, OnInit} from '@angular/core';
import {ApplicationService} from "../../services/application.service";
import {ApplicationList} from "../../models/applicationList";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    data: ApplicationList | undefined;
    p: number = 1;
    collection: [1, 2, 3, 4] | any;

    constructor(private applicationService: ApplicationService) {
    }

    ngOnInit(): void {
        this.getApplicationList()
    }

    getApplicationList() {
        this.applicationService.getApplications().subscribe((res: ApplicationList) => {
            console.log(res);
            this.data = res;
        })
    }

    downloadResume(url: string | undefined) {
        window.open(url)
    }
}
