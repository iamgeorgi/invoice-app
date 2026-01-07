import { inject, Injectable, signal } from "@angular/core";
import { InvoiceApiService } from "./invoice-api.service";

@Injectable({ providedIn: 'root' })
export class InvoiceService {
    // Should include Invoice[] model
    private invoices = signal<any>([]);

    api = inject(InvoiceApiService);

    loadInvoices() {
        this.api.getInvoices().subscribe(data => {
            console.log(data);
            this.invoices.set(data);
        });
    }

    invoices$ = this.invoices.asReadonly();
}
