import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashBoardComponent } from './admin-dash-board.component';

describe('AdminDashBoardComponent', () => {
  let component: AdminDashBoardComponent;
  let fixture: ComponentFixture<AdminDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
