import { inject, Injectable } from "@angular/core";
import { HttpService } from "../../core/services/http.service";
import { Invoice } from "../models/invoice.model";

@Injectable({ providedIn: 'root' })
export class InvoiceApiService {
  http = inject(HttpService);

  getInvoices() {
    return this.http.get<Invoice[]>('/assets/data/data.json');
  }
}
