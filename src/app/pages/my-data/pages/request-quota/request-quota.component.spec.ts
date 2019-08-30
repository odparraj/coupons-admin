import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestQuotaComponent } from './request-quota.component';

describe('RequestQuotaComponent', () => {
  let component: RequestQuotaComponent;
  let fixture: ComponentFixture<RequestQuotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestQuotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestQuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
