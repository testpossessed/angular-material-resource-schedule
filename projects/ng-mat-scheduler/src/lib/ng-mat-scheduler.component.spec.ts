import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatSchedulerComponent } from './ng-mat-scheduler.component';

describe('NgMatSchedulerComponent', () => {
  let component: NgMatSchedulerComponent;
  let fixture: ComponentFixture<NgMatSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
