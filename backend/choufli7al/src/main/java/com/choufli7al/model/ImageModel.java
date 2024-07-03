package com.choufli7al.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor@NoArgsConstructor
public class ImageModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String name;
 private String type;
 @Column(length = 5000000)
 private byte[] pic;
 
 
public ImageModel(String name, String type, byte[] pic) {
	super();
	this.name = name;
	this.type = type;
	this.pic = pic;
}
}
