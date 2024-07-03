// message.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { Payment } from '../monClass/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private PATH_APP = "http://localhost:8080/api/payment/";

  constructor(private httpClient: HttpClient) {}

  public sendPyment(payment: FormData): Observable<Payment> {
    return this.httpClient.post<Payment>(`${this.PATH_APP}add`, payment);
  }

  public listPayment(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(`${this.PATH_APP}allPayment`);
  }
}
