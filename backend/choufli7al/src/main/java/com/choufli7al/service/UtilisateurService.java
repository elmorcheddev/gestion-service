package com.choufli7al.service;

import java.util.List;

import com.choufli7al.model.Utilisateurs;

public interface UtilisateurService {

	List<Utilisateurs> listUtilisateurs();
	Utilisateurs saveClient(Utilisateurs  utilisateurs);
	Utilisateurs saveAdmin(Utilisateurs  utilisateurs);
	Utilisateurs savePrestataire(Utilisateurs utilisateurs);
	Utilisateurs findByIdUtilisateurs(Long id);
	Utilisateurs activeDesactiveUtilisateurs(Long id);
	Utilisateurs findByEmail(String username);
	List<Utilisateurs> findByRole(String roleName);
	Utilisateurs activeDesactive(Long id);
	
}
