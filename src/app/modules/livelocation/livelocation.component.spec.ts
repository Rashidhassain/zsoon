import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivelocationComponent } from './livelocation.component';

describe('LivelocationComponent', () => {
  let component: LivelocationComponent;
  let fixture: ComponentFixture<LivelocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivelocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
