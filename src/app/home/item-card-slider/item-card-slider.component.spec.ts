import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardSliderComponent } from './item-card-slider.component';

describe('ItemCardSliderComponent', () => {
  let component: ItemCardSliderComponent;
  let fixture: ComponentFixture<ItemCardSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCardSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
