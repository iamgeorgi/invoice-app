import { Component, inject } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceList } from '../../components/invoice-list/invoice-list';

@Component({
  selector: 'app-invoice-list-page',
  imports: [InvoiceList],
  templateUrl: './invoice-list.page.html',
  styleUrl: './invoice-list.scss',
})
export class InvoiceListPage {
  invoiceService = inject(InvoiceService);

  invoiceSummaries = this.invoiceService.invoiceSummaries;
}
