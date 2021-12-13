import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewApplicantComponent} from "./new-applicant/new-applicant.component";
import {NewJobComponent} from "./new-job/new-job.component";
import {PanelComponent} from "./panel.component";

const routes: Routes = [
  {
    path: '', component: PanelComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'new-applicant', component: NewApplicantComponent},
      {path: 'new-job', component: NewJobComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {
}
