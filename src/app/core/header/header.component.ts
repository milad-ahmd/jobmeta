import { Component, OnInit } from '@angular/core';
import {JobService} from "../../services/job.service";
import {JobList} from "../../models/jobList";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
