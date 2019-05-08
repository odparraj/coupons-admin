import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAditionalsComponent } from './service-aditionals.component';

describe('ServiceAditionalsComponent', () => {
  let component: ServiceAditionalsComponent;
  let fixture: ComponentFixture<ServiceAditionalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAditionalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAditionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
