import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletFooterComponent } from './wallet-footer.component';

describe('WalletFooterComponent', () => {
  let component: WalletFooterComponent;
  let fixture: ComponentFixture<WalletFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
