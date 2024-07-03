import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/monClass/payment';
import { PaymentService } from 'src/app/monService/payment.service';

@Component({
  selector: 'app-listpayment',
  templateUrl: './listpayment.component.html',
  styleUrls: ['./listpayment.component.css']
})
export class ListpaymentComponent implements OnInit{
  listPay: Payment[];

  constructor(private paymentService:PaymentService){}
  ngOnInit(): void {
    this.paymentService.listPayment().subscribe((data:Payment[])=>{
      this.listPay=data
    })
  }

}
