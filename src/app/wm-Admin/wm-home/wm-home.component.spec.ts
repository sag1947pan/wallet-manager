import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmHomeComponent } from './wm-home.component';

describe('WmHomeComponent', () => {
  let component: WmHomeComponent;
  let fixture: ComponentFixture<WmHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
