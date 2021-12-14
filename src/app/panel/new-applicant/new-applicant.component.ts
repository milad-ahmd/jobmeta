import {Component, OnInit} from '@angular/core';
import {JobService} from "../../services/job.service";
import {JobList} from "../../models/jobList";
import {ApplicationService} from "../../services/application.service";
import {Application} from "../../models/application";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-new-applicant',
    templateUrl: './new-applicant.component.html',
    styleUrls: ['./new-applicant.component.scss']
})
export class NewApplicantComponent implements OnInit {
    application: Application = new Application();
    jobs: JobList | undefined;
    form: FormGroup;
    constructor(private jobService: JobService,
                private applicationService: ApplicationService,
                private formBuilder : FormBuilder) {
        this.form = this.formBuilder.group(
            {
                name: new FormControl('',[Validators.required]),
                email: new FormControl('',[Validators.required]),
                phone: new FormControl('',[Validators.required]),
                status: new FormControl(false),
                job: new FormControl(false),
            }
        )
    }

    ngOnInit(): void {
        this.getJobList();
    }

    getJobList() {
        this.jobService.getJobs().subscribe((res: JobList) => {
            this.jobs = res;
        })
    }

    saveApplication() {
        console.log(this.application)
    }
}
