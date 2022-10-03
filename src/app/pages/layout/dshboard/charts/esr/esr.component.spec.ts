import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESrComponent } from './esr.component';

describe('ESrComponent', () => {
  let component: ESrComponent;
  let fixture: ComponentFixture<ESrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
