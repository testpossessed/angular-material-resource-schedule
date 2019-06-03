import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMatSchedulerComponent } from './ng-mat-scheduler.component';

@NgModule({
  declarations: [NgMatSchedulerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgMatSchedulerComponent]
})
export class NgMatSchedulerModule { }
