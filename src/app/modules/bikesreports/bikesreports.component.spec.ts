import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesreportsComponent } from './bikesreports.component';

describe('BikesreportsComponent', () => {
  let component: BikesreportsComponent;
  let fixture: ComponentFixture<BikesreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
