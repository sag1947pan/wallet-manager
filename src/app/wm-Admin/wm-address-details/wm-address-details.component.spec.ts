import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmAddressDetailsComponent } from './wm-address-details.component';

describe('WmAddressDetailsComponent', () => {
  let component: WmAddressDetailsComponent;
  let fixture: ComponentFixture<WmAddressDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmAddressDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
