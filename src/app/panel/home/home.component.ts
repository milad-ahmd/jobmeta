import {Component, OnInit} from '@angular/core';
import {ApplicationService} from "../../services/application.service";
import {ApplicationList} from "../../models/applicationList";
import {JobList} from "../../models/jobList";
import {JobService} from "../../services/job.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    data: ApplicationList | undefined;
    p: number = 1;
    collection: [1, 2, 3, 4] | any;
    jobs: JobList | undefined;

    constructor(private applicationService: ApplicationService,
                private jobService:JobService) {
    }

    ngOnInit(): void {
        this.getApplicationList()
        this.getJobList()

    }

    getApplicationList() {
        this.applicationService.getApplications().subscribe((res: ApplicationList) => {
            console.log(res);
            this.data = res;
        })
    }

    getJobList() {
        this.jobService.getJobs().subscribe((res: JobList) => {
            this.jobs = res;
        })
    }

    downloadResume(url: string | undefined) {
        window.open(url)
    }
}
