package com.choufli7al.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.choufli7al.model.Demande;
import com.choufli7al.model.Utilisateurs;
import com.choufli7al.repository.DemandeRepo;
import com.choufli7al.repository.UtilisateurRepo;
import com.choufli7al.service.DemandeService;
@Service
public class DemandeServiceImpl implements DemandeService {
@Autowired
private DemandeRepo demandeRepo;
@Autowired
private UtilisateurRepo utilisateurRepo;
	@Override
	public List<Demande> findByClient(Utilisateurs client) {
		// TODO Auto-generated method stub
		return demandeRepo.findByClient(client);
	}

	@Override
	public List<Demande> findByPrest(Utilisateurs prest) {
		// TODO Auto-generated method stub
		return demandeRepo.findByPrest(prest);
	}

	@Override
	public Demande ajouterDemande(Demande demande , Long idClient , Long idPrest) {
		Utilisateurs client = utilisateurRepo.findById(idClient).orElse(null);
		Utilisateurs prest = utilisateurRepo.findById(idPrest).orElse(null);
		boolean exist = demandeRepo.existsByPrestAndClient(prest, client);
		if(!exist) {
			demande.setClient(client);
			demande.setPrest(prest);
			demande.setEtat(false);
			demande.setEnAttent(true);
			demande.setDescription(demande.getDescription());
			return demandeRepo.save(demande);
		}else {
			return null;
		}
 	}

	@Override
	public Demande findByIdDemande(Long id) {
		// TODO Auto-generated method stub
		return demandeRepo.findById(id).orElse(null);
	}

	@Override
	public List<Demande> findAllDemande() {
		// TODO Auto-generated method stub
		return demandeRepo.findAll();
	}
@Override
public Demande accepter(Long id) {
	Demande demande = demandeRepo.findById(id).orElse(null);
	if(demande.isEtat()==false) {
		demande.setEtat(true);
		demande.setEnAttent(false);
		return demandeRepo.save(demande);
	} else {
		return null;
	}

}
@Override
public Demande refuser(Long id) {
	Demande demande = demandeRepo.findById(id).orElse(null);
	if(demande.isEtat()==true) {
		demande.setEtat(false);
		demande.setEnAttent(false);
		return demandeRepo.save(demande);
	}else {
	return null;
	}

}

@Override
public List<Demande> findByEtatIsTrue() {
	// TODO Auto-generated method stub
	return demandeRepo.findByEtatIsTrue();
}

@Override
public List<Demande> findByClientAndEtatIsTrue(Utilisateurs client) {
	// TODO Auto-generated method stub
	return demandeRepo.findByClientAndEtatIsTrue(client);
}

@Override
public List<Demande> findByPrestAndEtatIsTrue(Utilisateurs prest) {
	// TODO Auto-generated method stub
	return demandeRepo.findByPrestAndEtatIsTrue(prest);
}
}
