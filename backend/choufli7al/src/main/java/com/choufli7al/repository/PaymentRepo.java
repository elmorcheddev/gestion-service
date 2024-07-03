package com.choufli7al.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.choufli7al.model.Payment;
import com.choufli7al.model.Utilisateurs;


public interface PaymentRepo extends JpaRepository<Payment, Long>{
	boolean existsByClientAndPrest(Utilisateurs client, Utilisateurs prest);
}
