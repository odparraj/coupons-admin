import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotaComponent } from './quota.component';

describe('QuotaComponent', () => {
  let component: QuotaComponent;
  let fixture: ComponentFixture<QuotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
