package com.choufli7al.service;

import java.util.List;

import com.choufli7al.model.CategoriesServices;
import com.choufli7al.repository.CategoriesServicesRepo;

public interface CategoriesServicesService {

	List<CategoriesServices>  listServ();
	CategoriesServices ajouterCategoriesServices(CategoriesServices categoriesServices);
	CategoriesServices findById(Long categoryId);
 	CategoriesServices updateCategory(Long id, CategoriesServices categoryDetails);
}
