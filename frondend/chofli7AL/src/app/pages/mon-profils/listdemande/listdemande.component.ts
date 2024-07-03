import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesServices } from 'src/app/monClass/CategoriesServices';
import { Competance } from 'src/app/monClass/Competance';
import { Demande } from 'src/app/monClass/demande';
 import { Utilisateur } from 'src/app/monClass/utilisateur';
import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
import { DemandeService } from 'src/app/monService/demande.service';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';

@Component({
  selector: 'app-listdemande',
  templateUrl: './listdemande.component.html',
  styleUrls: ['./listdemande.component.css']
})
export class ListdemandeComponent implements OnInit{

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
       this.demadeService.listDemandeByPrest(this.utilisateur.id).subscribe((data:Demande[])=>{
        this.listDemandeByPrest=data
        console.log(data)
       })
      });
    }
     
 
  }
  refuser(id: number) {
    this.demadeService.refuser(id).subscribe((data:Demande)=>{
      console.log(data)
      if(data.etat == false){
        alert("demande refuser")
        this.router.navigate(['/listdemande']).then(()=>{
          location.reload()
        })
      }
    })
  }
    accepter(id: number) {
      this.demadeService.accepter(id).subscribe((data:Demande)=>{
        console.log(data)
        if(data.etat==true){
          alert("demande Accepter")
          this.router.navigate(['/listdemande']).then(()=>{
            location.reload()
          })
        }
      })    
    }
}
