import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneProfileAddressComponent } from './bene-profile-address.component';

describe('BeneProfileAddressComponent', () => {
  let component: BeneProfileAddressComponent;
  let fixture: ComponentFixture<BeneProfileAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneProfileAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneProfileAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
