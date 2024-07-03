import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesServices } from 'src/app/monClass/CategoriesServices';
import { Demande } from 'src/app/monClass/demande';
import { Utilisateur } from 'src/app/monClass/utilisateur';
import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
import { DemandeService } from 'src/app/monService/demande.service';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';

@Component({
  selector: 'app-listdemande-client',
  templateUrl: './listdemande-client.component.html',
  styleUrls: ['./listdemande-client.component.css']
})
export class ListdemandeClientComponent implements OnInit{
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
    photo: '' ,
  
  };
  nomRoles: string;
  listUtilisateur: Utilisateur[];
  listDemandeByPrest: Demande[];
  listDemandeByclient: Demande[];
  
 

 
 
  constructor( 
              private adminService:AdminService ,
              private utilisateurSrvice:UtilisateurService,
              private demadeService:DemandeService,

              private authAdmin:AdminAuthService, private router:Router){}
  ngOnInit(): void {
    if(this.authAdmin.isLoggedIn()){
      this.adminService.getUserInformation().subscribe((data:Utilisateur)=>{
        console.log(data)
       this.utilisateur=data
       this.nomRoles=this.utilisateur.rolesUtilisateur[0].nomRoles
       this.demadeService.listDemandeByClient(this.utilisateur.id).subscribe((data:Demande[])=>{
        this.listDemandeByclient=data
        console.log(data)
       })
      });
    }
     
 
  }
}
