package com.choufli7al.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RolesU {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomRoles;
}
