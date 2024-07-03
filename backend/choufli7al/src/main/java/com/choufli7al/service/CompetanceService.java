package com.choufli7al.service;

import java.util.List;
import java.util.Set;

import com.choufli7al.model.CategoriesServices;
import com.choufli7al.model.Competance;
import com.choufli7al.model.ImageModel;
import com.choufli7al.model.Utilisateurs;
 
public interface CompetanceService {
	List<Competance> findByPrestatire(Utilisateurs prestatire);
 	List<Competance> competances();
	List<Competance> findByAdresse(String adresse);

 	Competance findByIdCompetance(Long id);
	Competance ajouterCompetance(Competance competance, Long idUser);
	List<Competance> getCompetencesByCategory(CategoriesServices category);
	Set<ImageModel> getImagesByCompetance(Long competenceId);
	List<Competance> findByFilters(String adresse, Long categoryId);
 }
