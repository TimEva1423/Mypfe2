import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdsliderComponent } from './hdslider.component';

describe('HdsliderComponent', () => {
  let component: HdsliderComponent;
  let fixture: ComponentFixture<HdsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HdsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
