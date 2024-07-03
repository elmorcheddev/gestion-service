package com.choufli7al.service;

import java.util.List;

import com.choufli7al.model.Demande;
import com.choufli7al.model.Utilisateurs;

public interface DemandeService {
	List<Demande> findByClient(Utilisateurs client);
	List<Demande> findByPrest(Utilisateurs prest);
 	Demande findByIdDemande(Long id);
	Demande ajouterDemande(Demande demande, Long idClient, Long idPrest);
	List<Demande> findAllDemande();
 	Demande refuser(Long id);
	Demande accepter(Long id);
	List<Demande> findByEtatIsTrue();

	List<Demande> findByClientAndEtatIsTrue(Utilisateurs client);
	List<Demande> findByPrestAndEtatIsTrue(Utilisateurs prest);
}
