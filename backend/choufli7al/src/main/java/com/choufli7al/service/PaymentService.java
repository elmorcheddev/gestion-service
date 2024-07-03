package com.choufli7al.service;

import java.util.List;

import com.choufli7al.model.Payment;

public interface PaymentService {

	List<Payment> listPayments();
 	Payment envoyerPayment(Payment payment, Long idClient, Long idPrest);
}
