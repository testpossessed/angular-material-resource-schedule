import { Component, OnInit, Input, TemplateRef } from '@angular/core';

import { ViewMode } from '../models/view-mode';
import { SchedulerColumn } from '../models/scheduler-column';

@Component({
  selector: 'ng-mat-scheduler',
  templateUrl: 'ng-mat-scheduler.component.html',
  styleUrls: ['ng-mat-scheduler.component.scss']
})
export class NgMatSchedulerComponent implements OnInit {

  @Input()
  public viewMode: ViewMode = ViewMode.Day;

  @Input()
  public start: Date = new Date();

  @Input()
  public duration: number = 30;

  @Input()
  public data: Array<any> = [];

  @Input()
  public template: TemplateRef<any>;

  @Input()
  public resourceNameField: string = 'name';

  @Input()
  public cellItemMatcher: (column: SchedulerColumn, dataItem: any) => any;

  public columns: Array<SchedulerColumn> = [];

  constructor() { }

  ngOnInit() {
    this.columns = this.populateColumns();
  }

  public getResourceLabel(item: any) {
    return item[this.resourceNameField];
  }

  private populateColumns(): Array<SchedulerColumn> {
    switch (this.viewMode) {
      case ViewMode.Day:
        return this.populateColumnsForDayMode();
      default:
        break;
    }
  }

  private populateColumnsForDayMode(): Array<SchedulerColumn> {
    const result: Array<SchedulerColumn> = [];
    const startDate = new Date(this.start);
    for (let i = 0; i < this.duration; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      result.push({
        dateTime: date,
        formatted: this.formatDdMmYyyy(date)
      });
    }

    return result;
  }

  private formatDdMmYyyy(date: Date): string {
    return this.padLeadingZero(date.getDay().toString()) + '/' + this.padLeadingZero(date.getMonth().toString()) + '/' + date.getFullYear();
  }

  private padLeadingZero(value: string, length: number = 2): string {
    if (value.length >= length) {
      return value;
    }

    return '0000'.slice(0, length - 1) + value;
  }
}
