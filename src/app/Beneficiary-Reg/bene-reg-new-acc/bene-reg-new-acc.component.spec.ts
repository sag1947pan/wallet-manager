import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneRegNewAccComponent } from './bene-reg-new-acc.component';

describe('BeneRegNewAccComponent', () => {
  let component: BeneRegNewAccComponent;
  let fixture: ComponentFixture<BeneRegNewAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneRegNewAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneRegNewAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
