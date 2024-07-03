package com.choufli7al.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.choufli7al.model.Utilisateurs;
import com.choufli7al.service.UtilisateurService;

@RestController
@RequestMapping(value = "/api/utilisateur")
public class UtilisateurController {

	@Autowired
	private UtilisateurService utilisateurService;
	@GetMapping(value = "/all")
	public List<Utilisateurs> listUtilisateur(){
		return utilisateurService.listUtilisateurs();
	}
	@GetMapping(value = "/byId/{id}")
	public Utilisateurs findById(@PathVariable Long id){
		return utilisateurService.findByIdUtilisateurs(id);
	}
	@GetMapping(value = "/byEmail/{email}")
	public Utilisateurs findById(@PathVariable String  email){
		return utilisateurService.findByEmail(email);
	}
	@GetMapping(value = "/listClient")
	public List<Utilisateurs> listClient(){
		return utilisateurService.findByRole("CLIENT");
	}
	@GetMapping(value = "/listPrest")
	public List<Utilisateurs> listPrestatire(){
		return utilisateurService.findByRole("PRESTATAIRE");
	}
	@GetMapping(value = "/activerDesactive/{id}")
	public Utilisateurs activeDesactive(@PathVariable Long id) {
		return utilisateurService.activeDesactive(id);
	}
	@GetMapping(value = "/byemail/{email}")
	public Utilisateurs activeDesactive(@PathVariable String email) {
		return utilisateurService.findByEmail(email);
	} 
}
