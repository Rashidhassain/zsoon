import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestandComponent } from './managestand.component';

describe('ManagestandComponent', () => {
  let component: ManagestandComponent;
  let fixture: ComponentFixture<ManagestandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagestandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagestandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
