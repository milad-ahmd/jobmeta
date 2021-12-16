import {Component, OnInit} from '@angular/core';
import {JobService} from "../../services/job.service";
import {JobList} from "../../models/jobList";
import {ApplicationService} from "../../services/application.service";
import {Application} from "../../models/application";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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
                private router:Router,
                private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group(
            {
                name: new FormControl('', [Validators.required]),
                email: new FormControl('', [Validators.required]),
                phone: new FormControl('', [Validators.required]),
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
        this.applicationService.createApplication(this.application).subscribe(res=>{
            this.router.navigateByUrl('/')
        })
    }

    uploadFile(event: any) {
        let formData: FormData = new FormData();
        formData.append('content', event.target.files[0])
        this.applicationService.uploadResume(formData).subscribe((res: any) => {
            this.application.resume = res;
        })
    }
}
