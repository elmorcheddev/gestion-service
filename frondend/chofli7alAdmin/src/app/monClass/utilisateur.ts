import { Roles } from "./roles";

 
export class Utilisateur {
	  id:number
	  nom:string
	  prenom:string;
	  adresse:string;
	   email:string;
	  password:string;
	  etat:boolean
	  tel:string
	  photo:string
	  rolesUtilisateur:Roles[]
 
}

