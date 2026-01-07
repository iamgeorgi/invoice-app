import { inject, Injectable } from "@angular/core";
import { HttpService } from "../../core/services/http.service";

@Injectable({ providedIn: 'root' })
export class InvoiceApiService {
  http = inject(HttpService);

  getInvoices() {
    // Should include Invoice[] model
    return this.http.get<any>('/assets/data/data.json');
  }
}
