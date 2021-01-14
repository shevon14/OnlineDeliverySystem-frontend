import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbutnComponent } from './addbutn.component';

describe('AddbutnComponent', () => {
  let component: AddbutnComponent;
  let fixture: ComponentFixture<AddbutnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbutnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbutnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
