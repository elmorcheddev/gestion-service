package com.choufli7al.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.choufli7al.model.CategoriesServices;
import com.choufli7al.model.Competance;
import com.choufli7al.model.Utilisateurs;

public interface CompetanceRepo  extends JpaRepository<Competance, Long>{

	List<Competance> findByPrestatire(Utilisateurs prestatire);
	List<Competance> findByAdresse(String adresse);
	List<Competance> findByCategoriesServices(CategoriesServices categoriesServices);
	@Query("SELECT c FROM Competance c WHERE " +
		       "(:adresse IS NULL OR c.adresse LIKE %:adresse%) AND " +
		       "(:categoryId IS NULL OR c.categoriesServices.id = :categoryId)")
		List<Competance> findByFilters(@Param("adresse") String adresse, @Param("categoryId") Long categoryId);

}
