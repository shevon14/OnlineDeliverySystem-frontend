import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderHistoryDetailsComponent } from './customer-order-history-details.component';

describe('CustomerOrderHistoryDetailsComponent', () => {
  let component: CustomerOrderHistoryDetailsComponent;
  let fixture: ComponentFixture<CustomerOrderHistoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOrderHistoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
