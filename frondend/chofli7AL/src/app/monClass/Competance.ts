import { CategoriesServices } from "./CategoriesServices";
import { fileHandel } from "./filehandel";
import { Utilisateur } from "./utilisateur";

export class Competance{
     id :number;
 	  description:string;
	    nombeExperience :number;
 	   prestatire: Utilisateur;
		adresse:string
		productImages:fileHandel[];
		categoriesServices:CategoriesServices

	}