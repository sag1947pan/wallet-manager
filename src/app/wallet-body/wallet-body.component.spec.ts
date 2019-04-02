import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBodyComponent } from './wallet-body.component';

describe('WalletBodyComponent', () => {
  let component: WalletBodyComponent;
  let fixture: ComponentFixture<WalletBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
