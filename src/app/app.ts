import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceService } from './invoices/services/invoice.service';
import { InvoiceList } from './invoices/components/invoice-list/invoice-list';
import { InvoiceListPage } from "./invoices/pages/invoice-list/invoice-list.page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvoiceList, InvoiceListPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('invoice-app');
  invoiceService = inject(InvoiceService);

  ngOnInit(): void {
    this.invoiceService.loadInvoices();
  }
}
