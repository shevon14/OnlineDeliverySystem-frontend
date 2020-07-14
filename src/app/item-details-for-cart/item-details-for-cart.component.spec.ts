import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsForCartComponent } from './item-details-for-cart.component';

describe('ItemDetailsForCartComponent', () => {
  let component: ItemDetailsForCartComponent;
  let fixture: ComponentFixture<ItemDetailsForCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsForCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsForCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
