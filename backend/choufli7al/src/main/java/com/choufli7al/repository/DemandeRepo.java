package com.choufli7al.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.choufli7al.model.Demande;
import java.util.List;
import com.choufli7al.model.Utilisateurs;


public interface DemandeRepo  extends JpaRepository<Demande, Long>{

	List<Demande> findByClient(Utilisateurs client);
	List<Demande> findByPrest(Utilisateurs prest);
	boolean existsByPrestAndClient(Utilisateurs prest, Utilisateurs client); 
	List<Demande> findByEtatIsTrue();
	List<Demande> findByClientAndEtatIsTrue(Utilisateurs client);
	List<Demande> findByPrestAndEtatIsTrue(Utilisateurs prest);
}
