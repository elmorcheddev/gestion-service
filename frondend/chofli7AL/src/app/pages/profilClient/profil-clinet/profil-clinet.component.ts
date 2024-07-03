import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesServices } from 'src/app/monClass/CategoriesServices';
import { Utilisateur } from 'src/app/monClass/utilisateur';
import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';

@Component({
  selector: 'app-profil-clinet',
  templateUrl: './profil-clinet.component.html',
  styleUrls: ['./profil-clinet.component.css']
})
export class ProfilClinetComponent  implements OnInit{
  utilisateur: Utilisateur ={
    id: 0,
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    password: '',
    etat: false,
    tel: '',
     rolesUtilisateur: [],
    photo: '',
   
  };
  nomRoles: string;
  listUtilisateur: Utilisateur[];
 
  
 

 
 
  constructor( 
              private adminService:AdminService ,
              private utilisateurSrvice:UtilisateurService,
               private authAdmin:AdminAuthService,
                private router:Router){}
  ngOnInit(): void {
    if(this.authAdmin.isLoggedIn()){
      this.adminService.getUserInformation().subscribe((data:Utilisateur)=>{
        console.log(data)
       this.utilisateur=data
       this.nomRoles=this.utilisateur.rolesUtilisateur[0].nomRoles
      });
     
      
     
    }
  
  }
  
 
   
 
}
 
 
