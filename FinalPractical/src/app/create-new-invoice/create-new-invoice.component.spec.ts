import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewInvoiceComponent } from './create-new-invoice.component';

describe('CreateNewInvoiceComponent', () => {
  let component: CreateNewInvoiceComponent;
  let fixture: ComponentFixture<CreateNewInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
