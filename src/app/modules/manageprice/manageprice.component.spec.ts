import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepriceComponent } from './manageprice.component';

describe('ManagepriceComponent', () => {
  let component: ManagepriceComponent;
  let fixture: ComponentFixture<ManagepriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagepriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
