package com.choufli7al.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.choufli7al.model.Demande;
import com.choufli7al.model.Payment;
import com.choufli7al.service.PaymentService;

@RestController
@RequestMapping(value = "/api/payment")
public class PaymentController {

	@Autowired
	private PaymentService paymentService;
	@GetMapping(value = "/allPayment")
public List<Payment> listPayment(){
	return paymentService.listPayments();
}
	@PostMapping(value = "/add")
	public Payment ajouterDemande(@RequestPart("pay") Payment payment,
                                                         @RequestParam Long clientId,
                                                         @RequestParam Long prestId) {
		Payment demande2= paymentService.envoyerPayment(payment, clientId, prestId);
	
		return demande2;
	}}
