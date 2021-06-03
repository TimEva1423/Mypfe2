import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderModelComponent } from './order-model.component';

describe('OrderModelComponent', () => {
  let component: OrderModelComponent;
  let fixture: ComponentFixture<OrderModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
