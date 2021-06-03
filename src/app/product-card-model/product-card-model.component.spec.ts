import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardModelComponent } from './product-card-model.component';

describe('ProductCardModelComponent', () => {
  let component: ProductCardModelComponent;
  let fixture: ComponentFixture<ProductCardModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
