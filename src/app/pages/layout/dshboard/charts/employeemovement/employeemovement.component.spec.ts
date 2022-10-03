import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemovementComponent } from './employeemovement.component';

describe('EmployeemovementComponent', () => {
  let component: EmployeemovementComponent;
  let fixture: ComponentFixture<EmployeemovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeemovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeemovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
