import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatepaymentsComponent } from './initiatepayments.component';

describe('InitiatepaymentsComponent', () => {
  let component: InitiatepaymentsComponent;
  let fixture: ComponentFixture<InitiatepaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiatepaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiatepaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
