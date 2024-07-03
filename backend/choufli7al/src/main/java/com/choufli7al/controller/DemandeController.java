package com.choufli7al.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.choufli7al.model.Demande;
import com.choufli7al.model.Utilisateurs;
import com.choufli7al.service.DemandeService;
import com.choufli7al.service.UtilisateurService;
 
@RestController
@RequestMapping(value = "/api/demande")
public class DemandeController {
    

	@Autowired
	private DemandeService demandeService;
	@Autowired
	private UtilisateurService utilisateurService;
	@GetMapping(value = "/allAccepte")
	public List<Demande> list(){
		return demandeService.findByEtatIsTrue();
	}
	@GetMapping(value = "/byClient/{id}")
	public List<Demande> listByCient(@PathVariable Long id){
		Utilisateurs client=utilisateurService.findByIdUtilisateurs(id);
		return demandeService.findByClient(client);
	}
	@GetMapping(value = "/byPrest/{id}")
	public List<Demande> listByPrest(@PathVariable Long id){
		Utilisateurs prest=utilisateurService.findByIdUtilisateurs(id);
		return demandeService.findByPrest(prest);
	}
	@PostMapping(value = "/add")
	public Demande ajouterDemande(@RequestPart("demande") Demande demande,
                                                         @RequestParam Long clientId,
                                                         @RequestParam Long prestId) {
		Demande demande2= demandeService.ajouterDemande(demande, clientId, prestId);
	
		return demande2;
	}
	@GetMapping(value = "/accepter/{id}")
	public Demande accepter(@PathVariable Long id ) {
		return demandeService.accepter(id);
	}
	@GetMapping(value = "/refuse/{id}")
	public Demande refuser(@PathVariable Long id ) {
		return demandeService.refuser(id);
	}
	@GetMapping(value = "/listDbyClient/{id}")
	public List<Demande> listDemandeByClient(@PathVariable Long id){
		Utilisateurs client=utilisateurService.findByIdUtilisateurs(id);
		return demandeService.findByClientAndEtatIsTrue(client);
				
	}
	@GetMapping(value = "/listDbyPrest/{id}")
	public List<Demande> listDemandeByPrest(@PathVariable Long id){
		Utilisateurs prest=utilisateurService.findByIdUtilisateurs(id);
		return demandeService.findByPrestAndEtatIsTrue(prest);				
	}
}
