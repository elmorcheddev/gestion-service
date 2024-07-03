package com.choufli7al.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.choufli7al.model.Payment;
import com.choufli7al.model.Utilisateurs;
import com.choufli7al.repository.PaymentRepo;
import com.choufli7al.repository.UtilisateurRepo;
import com.choufli7al.service.PaymentService;
@Service
public class PaymentServiceImpl implements PaymentService {
@Autowired
private PaymentRepo paymentRepo;
@Autowired
private UtilisateurRepo utilisateurRepo;
	@Override
	public List<Payment> listPayments() {
		// TODO Auto-generated method stub
		return paymentRepo.findAll();
	}

	@Override
	public Payment envoyerPayment(Payment payment , Long idClient , Long idPrest) {
		Utilisateurs client = utilisateurRepo.findById(idClient).orElse(null);
		Utilisateurs prest = utilisateurRepo.findById(idPrest).orElse(null);
		boolean exist = paymentRepo.existsByClientAndPrest(client, prest);
		if(!exist) {
			payment.setClient(client);
			payment.setPrest(prest);
			payment.setPaymentMethod("visa");
			payment.setPrice(payment.getPrice());	
			return paymentRepo.save(payment);
		}else {
			return null;
		}
	}

}
