import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRegComponent } from './post-reg.component';

describe('PostRegComponent', () => {
  let component: PostRegComponent;
  let fixture: ComponentFixture<PostRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
