package com.choufli7al.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.choufli7al.model.CategoriesServices;
import com.choufli7al.repository.CategoriesServicesRepo;
import com.choufli7al.service.CategoriesServicesService;
@Service
public class CategoriesServicesServiceImpl implements CategoriesServicesService {
@Autowired
private CategoriesServicesRepo categoriesServicesRepo;
	@Override
	public List<CategoriesServices> listServ() {
		// TODO Auto-generated method stub
		return categoriesServicesRepo.findAll();
	}
	@Override
	public CategoriesServices findById(Long categoryId) {
		// TODO Auto-generated method stub
		return categoriesServicesRepo.findById(categoryId).get();
	}
	@Override
	public CategoriesServices ajouterCategoriesServices(CategoriesServices categoriesServices) {
		boolean exist = categoriesServicesRepo.existsByNomCat(categoriesServices.getNomCat());
		
		if(!exist) {
			categoriesServices.setDescriptionCat(categoriesServices.getDescriptionCat());
			categoriesServices.setNomCat(categoriesServices.getNomCat());
			categoriesServices.setPhoto(categoriesServices.getPhoto());
			return categoriesServicesRepo.save(categoriesServices);
		}else {
			return null;
		}
		
	}
	@Override
	public CategoriesServices updateCategory(Long id, CategoriesServices categoryDetails) {
        Optional<CategoriesServices> optionalCategory = categoriesServicesRepo.findById(id);

        if (optionalCategory.isPresent()) {
            CategoriesServices existingCategory = optionalCategory.get();

            // Check if the new name already exists in another category
            Optional<CategoriesServices> categoryWithSameName = categoriesServicesRepo.findByNomCat(categoryDetails.getNomCat());
            if (categoryWithSameName.isPresent() && !categoryWithSameName.get().getId().equals(id)) {
                throw new RuntimeException("Category name already exists");
            }

            existingCategory.setNomCat(categoryDetails.getNomCat());
            existingCategory.setDescriptionCat(categoryDetails.getDescriptionCat());
            existingCategory.setPhoto(categoryDetails.getPhoto());
            return categoriesServicesRepo.save(existingCategory);
        } else {
            throw new RuntimeException("Category not found with id " + id);
        }
    }

}
