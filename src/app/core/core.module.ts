import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HederComponent } from './heder/heder.component';


@NgModule({
  declarations: [
    HederComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    HederComponent
  ]
})
export class CoreModule { }
