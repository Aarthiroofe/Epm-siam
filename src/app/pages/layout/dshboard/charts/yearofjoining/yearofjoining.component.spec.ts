import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearofjoiningComponent } from './yearofjoining.component';

describe('YearofjoiningComponent', () => {
  let component: YearofjoiningComponent;
  let fixture: ComponentFixture<YearofjoiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearofjoiningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearofjoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
