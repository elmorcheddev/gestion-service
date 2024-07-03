package com.choufli7al.model;

import java.util.Set;

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
public class Demande {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String description;
private boolean etat;
private boolean enAttent;
@ManyToOne
@JoinColumn(name="idclient")
private Utilisateurs client;
@ManyToOne
@JoinColumn(name="idprest")
private Utilisateurs prest;

}
