import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceService } from './invoices/services/invoice.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
