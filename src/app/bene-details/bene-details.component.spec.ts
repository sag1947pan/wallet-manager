import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneDetailsComponent } from './bene-details.component';

describe('BeneDetailsComponent', () => {
  let component: BeneDetailsComponent;
  let fixture: ComponentFixture<BeneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
