import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearofrelievingComponent } from './yearofrelieving.component';

describe('YearofrelievingComponent', () => {
  let component: YearofrelievingComponent;
  let fixture: ComponentFixture<YearofrelievingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearofrelievingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearofrelievingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
