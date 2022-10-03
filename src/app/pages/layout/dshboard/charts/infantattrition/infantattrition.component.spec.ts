import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfantattritionComponent } from './infantattrition.component';

describe('InfantattritionComponent', () => {
  let component: InfantattritionComponent;
  let fixture: ComponentFixture<InfantattritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfantattritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfantattritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
