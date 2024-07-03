package com.choufli7al.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.choufli7al.model.CategoriesServices;

public interface CategoriesServicesRepo extends JpaRepository<CategoriesServices, Long>{
boolean existsByNomCat(String nomCat);

Optional<CategoriesServices> findByNomCat(String nomCat);
}
