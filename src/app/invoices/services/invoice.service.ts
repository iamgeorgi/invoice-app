import { computed, inject, Injectable, Signal, signal } from "@angular/core";
import { InvoiceApiService } from "./invoice-api.service";
import { Invoice, InvoiceSummary } from "../models/invoice.model";

@Injectable({ providedIn: 'root' })
export class InvoiceService {
    private invoices = signal<Invoice[]>([]);

    api = inject(InvoiceApiService);

    loadInvoices() {
        return this.api.getInvoices().subscribe(data => {
            console.log(data);
            this.invoices.set(data);
        });
    }

    invoiceSummaries: Signal<InvoiceSummary[]> = computed(() => {
        return this.invoices().map(invoice => ({
            id: invoice.id,
            paymentDue: invoice.paymentDue,
            clientName: invoice.clientName,
            total: invoice.total,
            status: invoice.status,
        }));
    });

    invoices$ = this.invoices.asReadonly();
}
