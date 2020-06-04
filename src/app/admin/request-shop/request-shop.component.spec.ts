import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestShopComponent } from './request-shop.component';

describe('RequestShopComponent', () => {
  let component: RequestShopComponent;
  let fixture: ComponentFixture<RequestShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
