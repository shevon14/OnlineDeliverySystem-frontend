import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPopUpModalComponent } from './seller-pop-up-modal.component';

describe('SellerPopUpModalComponent', () => {
  let component: SellerPopUpModalComponent;
  let fixture: ComponentFixture<SellerPopUpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerPopUpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPopUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
