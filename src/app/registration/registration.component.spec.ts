import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRegComponent } from './registration.component';

describe('MasterRegComponent', () => {
  let component: MasterRegComponent;
  let fixture: ComponentFixture<MasterRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
