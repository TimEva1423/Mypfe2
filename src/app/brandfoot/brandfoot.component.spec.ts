import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandfootComponent } from './brandfoot.component';

describe('BrandfootComponent', () => {
  let component: BrandfootComponent;
  let fixture: ComponentFixture<BrandfootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandfootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
