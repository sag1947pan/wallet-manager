import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneRegComponent } from './bene-reg.component';

describe('BeneRegComponent', () => {
  let component: BeneRegComponent;
  let fixture: ComponentFixture<BeneRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
