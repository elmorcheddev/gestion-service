package com.choufli7al.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.choufli7al.model.RolesU;
import java.util.List;


public interface RolesRepo extends JpaRepository<RolesU, Long> {

	RolesU  findByNomRoles(String nomRoles);
}
