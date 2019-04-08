import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFileUploadComponent } from './client-file-upload.component';

describe('ClientFileUploadComponent', () => {
  let component: ClientFileUploadComponent;
  let fixture: ComponentFixture<ClientFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
