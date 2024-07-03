package com.choufli7al.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.choufli7al.model.RolesU;
import com.choufli7al.model.Utilisateurs;
import com.choufli7al.repository.RolesRepo;
import com.choufli7al.repository.UtilisateurRepo;
import com.choufli7al.service.UtilisateurService;
@Service
public class UtilisateurServiceImpl implements UtilisateurService{
@Autowired
private UtilisateurRepo utilisateurRepo;
@Autowired
private RolesRepo  rolesRepo;
@Autowired
private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Override
	public List<Utilisateurs> listUtilisateurs() {
		// TODO Auto-generated method stub
		return utilisateurRepo.findAll();
	}

	@Override
	public Utilisateurs saveClient(Utilisateurs utilisateurs) {
		Set<RolesU> listRole = new HashSet<>();
		RolesU rolesU= rolesRepo.findByNomRoles("CLIENT");
		listRole.add(rolesU);
		boolean existByEmail = utilisateurRepo.existsByEmail(utilisateurs.getEmail());
		if(!existByEmail) {
			utilisateurs.setNom(utilisateurs.getNom());
			utilisateurs.setPrenom(utilisateurs.getPrenom());
			utilisateurs.setAdresse(utilisateurs.getAdresse());
			utilisateurs.setEmail(utilisateurs.getEmail());
			utilisateurs.setRolesUtilisateur(listRole);
			utilisateurs.setTel(utilisateurs.getTel());
			utilisateurs.setEtat(true);
 			utilisateurs.setPassword(bCryptPasswordEncoder.encode(utilisateurs.getPassword()));
			return utilisateurRepo.save(utilisateurs);
		}else{
			 
			return null;

		}
	}

	@Override
	public Utilisateurs savePrestataire(Utilisateurs utilisateurs) {
		Set<RolesU> listRole = new HashSet<>();
		RolesU rolesU= rolesRepo.findByNomRoles("PRESTATAIRE");
		listRole.add(rolesU);
		boolean existByEmail = utilisateurRepo.existsByEmail(utilisateurs.getEmail());
		if(!existByEmail) {
			utilisateurs.setNom(utilisateurs.getNom());
			utilisateurs.setPrenom(utilisateurs.getPrenom());
			utilisateurs.setAdresse(utilisateurs.getAdresse());
			utilisateurs.setEmail(utilisateurs.getEmail());
			utilisateurs.setEtat(true);
 			utilisateurs.setPhoto(utilisateurs.getPhoto());
			utilisateurs.setRolesUtilisateur(listRole);
			utilisateurs.setTel(utilisateurs.getTel());
			utilisateurs.setPassword(bCryptPasswordEncoder.encode(utilisateurs.getPassword()));
			return utilisateurRepo.save(utilisateurs);
		}else{
			return null;

		}
	}

	@Override
	public Utilisateurs findByIdUtilisateurs(Long id) {
		// TODO Auto-generated method stub
		return utilisateurRepo.findById(id).get();
	}

	@Override
	public Utilisateurs activeDesactiveUtilisateurs(Long id) {
	 Utilisateurs utilisateurs= utilisateurRepo.findById(id).get();
	 if(utilisateurs.isEtat()== true) {
		 utilisateurs.setEtat(false);
		 return utilisateurRepo.save(utilisateurs);
	 }else {
		 utilisateurs.setEtat(true);
		 return utilisateurRepo.save(utilisateurs); 
	 }
 	}

	@Override
	public Utilisateurs findByEmail(String username) {
		// TODO Auto-generated method stub
		return utilisateurRepo.findByEmail(username);
	}
	@Override
	public List<Utilisateurs> findByRole(String roleName) {
	    return utilisateurRepo.findByRoleName(roleName);
	}

	@Override
	public Utilisateurs saveAdmin(Utilisateurs utilisateurs) {
		Set<RolesU> listRole = new HashSet<>();
		RolesU rolesU= rolesRepo.findByNomRoles("ADMIN");
		listRole.add(rolesU);
		boolean existByEmail = utilisateurRepo.existsByEmail(utilisateurs.getEmail());
		if(!existByEmail) {
			utilisateurs.setNom(utilisateurs.getNom());
			utilisateurs.setPrenom(utilisateurs.getPrenom());
			utilisateurs.setAdresse(utilisateurs.getAdresse());
			utilisateurs.setEmail(utilisateurs.getEmail());
			utilisateurs.setEtat(true);
 			utilisateurs.setPhoto(utilisateurs.getPhoto());
			utilisateurs.setRolesUtilisateur(listRole);
			utilisateurs.setTel(utilisateurs.getTel());
			utilisateurs.setPassword(bCryptPasswordEncoder.encode(utilisateurs.getPassword()));
			return utilisateurRepo.save(utilisateurs);
		}else{
			return null;

		}
	}
	@Override
	public Utilisateurs activeDesactive(Long id ) {
		Utilisateurs utilisateurs = utilisateurRepo.findById(id).get();
		if(utilisateurs.isEtat()==true) {
			utilisateurs.setEtat(false);
			return utilisateurRepo.save(utilisateurs);
		}else {
			utilisateurs.setEtat(true);
			return utilisateurRepo.save(utilisateurs);
		}
	}
}
