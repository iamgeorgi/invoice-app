import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { delay } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HttpService {
  http = inject(HttpClient);

  get<T>(url: string) {
    return this.http.get<T>(url).pipe(delay(500));
  }

  // Should do proper implementation
  post<T>(url: string, body: unknown) {
    return this.http.post<T>(`${url}`, body);
  }

  put<T>(url: string, body: unknown) {
    return this.http.put<T>(`${url}`, body);
  }

  delete<T>(endpoint: string) {
    return this.http.delete<T>(`${endpoint}`);
  }
}
