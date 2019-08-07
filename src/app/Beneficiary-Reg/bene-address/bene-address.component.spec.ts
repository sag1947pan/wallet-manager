import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneAddressComponent } from './bene-address.component';

describe('BeneAddressComponent', () => {
  let component: BeneAddressComponent;
  let fixture: ComponentFixture<BeneAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
