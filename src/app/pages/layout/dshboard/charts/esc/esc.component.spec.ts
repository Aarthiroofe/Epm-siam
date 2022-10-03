import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EScComponent } from './esc.component';

describe('EScComponent', () => {
  let component: EScComponent;
  let fixture: ComponentFixture<EScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
