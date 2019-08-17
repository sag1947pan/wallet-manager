import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmServicesPreferencesComponent } from './wm-services-preferences.component';

describe('WmServicesPreferencesComponent', () => {
  let component: WmServicesPreferencesComponent;
  let fixture: ComponentFixture<WmServicesPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmServicesPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmServicesPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
