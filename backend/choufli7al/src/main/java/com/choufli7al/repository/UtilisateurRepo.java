package com.choufli7al.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.choufli7al.model.Utilisateurs;

public interface UtilisateurRepo extends JpaRepository<Utilisateurs, Long>{

	Utilisateurs findByEmail(String email);
	boolean existsByEmail(String email);

    @Query("SELECT u FROM Utilisateurs u JOIN u.rolesUtilisateur r WHERE r.nomRoles = :roleName")
    List<Utilisateurs> findByRoleName(@Param("roleName") String roleName);
 
}
