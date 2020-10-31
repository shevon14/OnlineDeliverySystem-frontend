import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByShopComponent } from './product-by-shop.component';

describe('ProductByShopComponent', () => {
  let component: ProductByShopComponent;
  let fixture: ComponentFixture<ProductByShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductByShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
