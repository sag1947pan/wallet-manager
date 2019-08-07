import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneHomeComponent } from './bene-home.component';

describe('BeneHomeComponent', () => {
  let component: BeneHomeComponent;
  let fixture: ComponentFixture<BeneHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
