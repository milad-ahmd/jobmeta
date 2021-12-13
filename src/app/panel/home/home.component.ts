import {Component, OnInit} from '@angular/core';
import {ApplicationService} from "../../services/application.service";
import {Application, ApplicationList} from "../../models/applicationList";
import {JobList} from "../../models/jobList";
import {JobService} from "../../services/job.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    detail: ApplicationList | undefined;
    data: Application[] = [];
    p: number = 1;
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
            this.detail = res;
            this.data = res.items;
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
