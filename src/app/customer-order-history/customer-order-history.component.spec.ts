import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderHistoryComponent } from './customer-order-history.component';

describe('CustomerOrderHistoryComponent', () => {
  let component: CustomerOrderHistoryComponent;
  let fixture: ComponentFixture<CustomerOrderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOrderHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
