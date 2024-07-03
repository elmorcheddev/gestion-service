package com.choufli7al.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private double price;
private String codeCart;
private String paymentMethod;
@ManyToOne
@JoinColumn(name = "idclient")
private Utilisateurs client;
@ManyToOne
@JoinColumn(name = "idprest")
private Utilisateurs prest;
}
