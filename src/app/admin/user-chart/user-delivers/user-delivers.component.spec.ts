import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeliversComponent } from './user-delivers.component';

describe('UserDeliversComponent', () => {
  let component: UserDeliversComponent;
  let fixture: ComponentFixture<UserDeliversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeliversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeliversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
