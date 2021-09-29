import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutSubtotalComponent } from './check-out-subtotal.component';

describe('CheckOutSubtotalComponent', () => {
  let component: CheckOutSubtotalComponent;
  let fixture: ComponentFixture<CheckOutSubtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutSubtotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutSubtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
