import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmBankSetupComponent } from './wm-bank-setup.component';

describe('WmBankSetupComponent', () => {
  let component: WmBankSetupComponent;
  let fixture: ComponentFixture<WmBankSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmBankSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmBankSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
