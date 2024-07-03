package com.choufli7al.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.choufli7al.model.CategoriesServices;
import com.choufli7al.model.Competance;
import com.choufli7al.model.ImageModel;
import com.choufli7al.model.Utilisateurs;
import com.choufli7al.repository.CompetanceRepo;
import com.choufli7al.repository.UtilisateurRepo;
import com.choufli7al.service.CompetanceService;
@Service
public class CompetanceServiceImpl implements CompetanceService {
@Autowired
	private CompetanceRepo competanceRepo;
@Autowired
private UtilisateurRepo utilisateurRepo;
@Autowired 
private GeocodingService geocodingService;
	@Override
	public List<Competance> competances() {
		// TODO Auto-generated method stub
		return competanceRepo.findAll();
	}
 
 
	@Override
	public Competance ajouterCompetance(Competance competance , Long idUser) {
		Utilisateurs utilisateurs=utilisateurRepo.findById(idUser).get();
		competance.setPrestatire(utilisateurs);
		competance.setDescription(competance.getDescription());
		competance.setNombeExperience(competance.getNombeExperience());
		competance.setAdresse(utilisateurs.getAdresse());
		return competanceRepo.save(competance);
	}
	@Override
	 public Set<ImageModel> getImagesByCompetance(Long competenceId) {
	        Competance competence = competanceRepo.findById(competenceId).orElse(null);
	        if (competence != null) {
	            return competence.getProductImages();
	        }
	        return null;
	    }
	@Override
	public Competance findByIdCompetance(Long id) {
		// TODO Auto-generated method stub
		return competanceRepo.findById(id).get();
	}

	@Override
	public List<Competance> findByPrestatire(Utilisateurs prestatire) {
		// TODO Auto-generated method stub
		return competanceRepo.findByPrestatire(prestatire);
	}
	@Override
	 public List<Competance> getCompetencesByCategory(CategoriesServices category) {
	        return competanceRepo.findByCategoriesServices(category);
	    }
@Override
	public List<Competance> findByFilters(String adresse, Long categoryId) {
	    // Implement your filtering logic here, possibly using JPA Criteria API or custom queries
	    return competanceRepo.findByFilters(adresse, categoryId);
	}

	@Override
	public List<Competance> findByAdresse(String adresse) {
		// TODO Auto-generated method stub
		return competanceRepo.findByAdresse(adresse);
	}
}
