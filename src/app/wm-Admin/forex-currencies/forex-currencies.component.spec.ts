import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexCurrenciesComponent } from './forex-currencies.component';

describe('ForexCurrenciesComponent', () => {
  let component: ForexCurrenciesComponent;
  let fixture: ComponentFixture<ForexCurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexCurrenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
