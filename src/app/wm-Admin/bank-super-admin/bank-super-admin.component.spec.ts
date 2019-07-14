import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSuperAdminComponent } from './bank-super-admin.component';

describe('BankSuperAdminComponent', () => {
  let component: BankSuperAdminComponent;
  let fixture: ComponentFixture<BankSuperAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankSuperAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
