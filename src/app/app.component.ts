import { Component } from '@angular/core';
import { ViewMode } from 'projects/ng-mat-scheduler/src/models/view-mode';
import { SchedulerColumn } from 'projects/ng-mat-scheduler/src/models/scheduler-column';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-resource-schedule';

  public viewMode: ViewMode = ViewMode.Day;
  public start: Date = new Date();
  public duration: number = 30;
  public data: Array<any> = [
    {
      name: 'Res 1',
      assignments: [{
        date: this.start,
        task: 'Task 1'
      }]
    },
    {
      name: 'Res 2',
      assignments: [{
        date: new Date(new Date(this.start).setDate(this.start.getDate() + 1)),
        task: 'Task 2'
      }]
    },
    {
      name: 'Res 3',
      assignments: [{
        date: new Date(new Date(this.start).setDate(this.start.getDate() + 2)),
        task: 'Task 3'
      }]
    },
    {
      name: 'Res 4',
      assignments: [{
        date: new Date(new Date(this.start).setDate(this.start.getDate() + 3)),
        task: 'Task 4'
      }]
    },
    {
      name: 'Res 5',
      assignments: [{
        date: new Date(new Date(this.start).setDate(this.start.getDate() + 4)),
        task: 'Task 5'
      }]
    },
    {
      name: 'Res 6'
    },
    {
      name: 'Res 7'
    },
    {
      name: 'Res 8'
    },
    {
      name: 'Res 9'
    },
    {
      name: 'Res 10'
    }
  ];

  public cellItemMatcher(column: SchedulerColumn, data: { name: string, assignments: Array<{ date: Date, task: string }> }): any {
    if (data.assignments && data.assignments.length) {
      return data.assignments.filter((a) => {
        return a.date.getDate() === column.dateTime.getDate();
      });
    }
    return [];
  }
}
