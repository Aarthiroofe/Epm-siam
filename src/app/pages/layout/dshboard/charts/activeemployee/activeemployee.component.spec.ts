import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveemployeeComponent } from './activeemployee.component';

describe('ActiveemployeeComponent', () => {
  let component: ActiveemployeeComponent;
  let fixture: ComponentFixture<ActiveemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
