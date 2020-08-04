import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPopUpModalComponent } from './customer-pop-up-modal.component';

describe('CustomerPopUpModalComponent', () => {
  let component: CustomerPopUpModalComponent;
  let fixture: ComponentFixture<CustomerPopUpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPopUpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPopUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
