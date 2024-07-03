package com.choufli7al.controller;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.choufli7al.model.CategoriesServices;
import com.choufli7al.model.Competance;
import com.choufli7al.model.ImageModel;
import com.choufli7al.model.Utilisateurs;
import com.choufli7al.service.CategoriesServicesService;
import com.choufli7al.service.CompetanceService;
import com.choufli7al.service.UtilisateurService;
@RestController
@RequestMapping(value = "/api/comm")
public class CompetanceController {

	@Autowired
	private CompetanceService competanceService;
	@Autowired
	private UtilisateurService utilisateurService;
	@Autowired
	private CategoriesServicesService categoriesServicesService;
	@PostMapping(value = "/saveComm")
 
	public Competance saveNewCompatnce(@RequestPart("comm") Competance competance,
										@RequestPart("imageFile") MultipartFile[] multipartFile,
										@RequestParam  Long userId) {
		Set<ImageModel> imageModels;
		try {
			imageModels = uploadImage(multipartFile);
			competance.setProductImages(imageModels);
			competance.setProductImages(imageModels);
	 			return competanceService.ajouterCompetance(competance, userId);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	
		 
	}
	  @GetMapping("/competence/{id}/images")
	    public Set<ImageModel> getImagesByCompetence(@PathVariable Long id) {
	        return competanceService.getImagesByCompetance(id);
	    }
	public Set<ImageModel> uploadImage(MultipartFile[] multipartFile) throws IOException {
		Set<ImageModel>imageModels= new HashSet<>();
		for(MultipartFile file :multipartFile ) {
			ImageModel imageModel = new ImageModel(
					file.getOriginalFilename(),
					file.getContentType(),
					file.getBytes()
					
					);
			imageModels.add(imageModel);
			
		}
		return imageModels;
	}
	@GetMapping(value = "/findById/{id}")
	public Competance findById(@PathVariable Long id) {
		return competanceService.findByIdCompetance(id);
	}
 	 
	@GetMapping(value = "/all")
	public List<Competance> list() {
		return competanceService.competances();
	}
	@GetMapping(value = "/allCompByPREST/{id}")
	public List<Competance> listPrest(@PathVariable Long id) {
		Utilisateurs  utilisateurs=utilisateurService.findByIdUtilisateurs(id);
		return competanceService.findByPrestatire(utilisateurs);
	}
	@GetMapping(value = "/getByadresse")
	public List<Competance> findByAdresse(@RequestParam String adresse) {
		// TODO Auto-generated method stub
		
		return competanceService.findByAdresse(adresse);
	}
	 
	@GetMapping("/competencies")
	public ResponseEntity<List<Competance>> getCompetencies(
	        @RequestParam(required = false) String adresse,
	        @RequestParam(required = false) Long categoryId) {
	    List<Competance> competencies = competanceService.findByFilters(adresse, categoryId);
	    return ResponseEntity.ok(competencies);
	}
     @GetMapping("/categories/{categoryId}")
    public List<Competance> getCompetencesByCategoryId(@PathVariable Long categoryId) {
        CategoriesServices category = categoriesServicesService.findById(categoryId);
        if (category != null) {
            return competanceService.getCompetencesByCategory(category);
        } else {
            // Handle case where category with given id is not found
            return null;
        }
    }
}
