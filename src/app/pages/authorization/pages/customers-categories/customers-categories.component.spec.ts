import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCategoriesComponent } from './customers-categories.component';

describe('CustomersCategoriesComponent', () => {
  let component: CustomersCategoriesComponent;
  let fixture: ComponentFixture<CustomersCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
