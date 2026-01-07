import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListPage } from './invoice-list.page';

describe('InvoiceList', () => {
  let component: InvoiceListPage;
  let fixture: ComponentFixture<InvoiceListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
