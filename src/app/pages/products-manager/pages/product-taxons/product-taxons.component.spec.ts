import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTaxonsComponent } from './product-taxons.component';

describe('ProductTaxonsComponent', () => {
  let component: ProductTaxonsComponent;
  let fixture: ComponentFixture<ProductTaxonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTaxonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTaxonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
