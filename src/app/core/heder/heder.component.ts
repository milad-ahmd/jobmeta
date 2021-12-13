import { Component, OnInit } from '@angular/core';
import {JobService} from "../../services/job.service";
import {JobList} from "../../models/jobList";
import {ApplicationList} from "../../models/applicationList";

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {
  data: JobList | undefined;

  constructor(private jobService:JobService) { }

  ngOnInit(): void {
    this.getJobList()
  }

  getJobList() {
    this.jobService.getJobs().subscribe((res: JobList) => {
      this.data = res;
    })
  }

}
