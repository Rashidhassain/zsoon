import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZsoonComponent } from './zsoon.component';

describe('ZsoonComponent', () => {
  let component: ZsoonComponent;
  let fixture: ComponentFixture<ZsoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZsoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
