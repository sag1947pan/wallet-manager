import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clientreg2Component } from './clientreg2.component';

describe('Clientreg2Component', () => {
  let component: Clientreg2Component;
  let fixture: ComponentFixture<Clientreg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clientreg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clientreg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
