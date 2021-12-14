import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PanelRoutingModule} from './panel-routing.module';
import {PanelComponent} from './panel.component';
import {HomeComponent} from './home/home.component';
import {NewApplicantComponent} from './new-applicant/new-applicant.component';
import {NewJobComponent} from './new-job/new-job.component';
import {CoreModule} from "../core/core.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {TimeagoModule} from "ngx-timeago";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
    declarations: [
        PanelComponent,
        HomeComponent,
        NewApplicantComponent,
        NewJobComponent
    ],
    imports: [
        CommonModule,
        TimeagoModule.forRoot(),
        PanelRoutingModule,
        CoreModule,
        FormsModule,
        NgxPaginationModule,
        LeafletModule,
        ReactiveFormsModule
    ]
})
export class PanelModule {
}
