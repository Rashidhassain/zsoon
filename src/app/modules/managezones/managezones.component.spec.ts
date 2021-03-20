import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagezonesComponent } from './managezones.component';

describe('ManagezonesComponent', () => {
  let component: ManagezonesComponent;
  let fixture: ComponentFixture<ManagezonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagezonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagezonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
