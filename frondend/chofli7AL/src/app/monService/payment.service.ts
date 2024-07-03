// message.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../monClass/Message';
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

  public listPayment(iduser: number, idadmin: number): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.PATH_APP}list/${idadmin}/${iduser}`);
  }
}
