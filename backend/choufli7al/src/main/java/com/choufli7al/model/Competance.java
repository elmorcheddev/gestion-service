package com.choufli7al.model;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Competance {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
	private String description;
	private int nombeExperience;
	private String adresse;
	@ManyToOne
	@JoinColumn(name = "idcat")
	private CategoriesServices categoriesServices;
	@ManyToOne
	@JoinColumn(name = "idprestataire")
	private Utilisateurs prestatire;
	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinTable(name="product_images",
				joinColumns = {@JoinColumn(name= "id_product")},
				inverseJoinColumns = {@JoinColumn(name="id_imagemodel")
				})
	
	private Set<ImageModel> productImages;
}
