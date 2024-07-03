package com.choufli7al.model;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoriesServices {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
	private String nomCat;
	private String descriptionCat;
	@Lob
	@Column(name = "photo", columnDefinition="LONGBLOB")	
	private byte[]  photo;
 }
