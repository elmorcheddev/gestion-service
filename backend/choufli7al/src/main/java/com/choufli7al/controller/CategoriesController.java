package com.choufli7al.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.choufli7al.model.CategoriesServices;
import com.choufli7al.service.CategoriesServicesService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(value = "/api/cat")
public class CategoriesController {

	@Autowired
	private CategoriesServicesService categoriesServicesService;
	
	@GetMapping(value = "/allCat")
	public List<CategoriesServices> listServ() {
		// TODO Auto-generated method stub
		return categoriesServicesService.listServ();
	}
	@GetMapping(value = "/allcatAdmin")
	public List<CategoriesServices> allcatAdmin() {
		// TODO Auto-generated method stub
		return categoriesServicesService.listServ();
	}
	@GetMapping(value = "/byId/{id}")
	public CategoriesServices byId(@PathVariable Long id) {
		// TODO Auto-generated method stub
		return categoriesServicesService.findById(id);
	}
	@GetMapping(value = "/byIdAdmin/{id}")
	public CategoriesServices byIdAdmin(@PathVariable Long id) {
		// TODO Auto-generated method stub
		return categoriesServicesService.findById(id);
	}
	@PostMapping(value =  "/ajouter")
	public CategoriesServices postMethodName(@RequestPart("cat") CategoriesServices categoriesServices , 
								@RequestPart("photo") MultipartFile file) {
		try {
			categoriesServices.setPhoto(file.getBytes());
			return categoriesServicesService.ajouterCategoriesServices(categoriesServices);

		} catch (IOException e) {
 			e.printStackTrace();
 			return null;
		}
		//TODO: process POST request
		
 	}
	@PutMapping(value =  "/modifier/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable Long id, @RequestBody CategoriesServices categoryDetails) {
        try {
            CategoriesServices updatedCategory = categoriesServicesService.updateCategory(id, categoryDetails);
            return ResponseEntity.ok(updatedCategory);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
