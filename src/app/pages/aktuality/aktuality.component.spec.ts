import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktualityComponent } from './aktuality.component';

describe('AktualityComponent', () => {
  let component: AktualityComponent;
  let fixture: ComponentFixture<AktualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
