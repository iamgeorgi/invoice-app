import { Component, effect, input } from '@angular/core';
import { InvoiceSummary } from '../../models/invoice.model';

@Component({
  selector: 'app-invoice-list',
  imports: [],
  templateUrl: './invoice-list.html',
  styleUrl: './invoice-list.scss',
})
export class InvoiceList {
  invoices = input.required<InvoiceSummary[]>();

  constructor() {
    effect(() => console.log('invoice-list >>>', this.invoices()));
  }
}
