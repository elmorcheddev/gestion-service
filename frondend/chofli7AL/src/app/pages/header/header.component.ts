import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { Utilisateur } from '../../monClass/utilisateur';
   import { AdminService } from '../../monService/admin.service';
 import { AdminAuthService } from '../../monService/admin-auth.service';
import { CategoriesServices } from 'src/app/monClass/CategoriesServices';
import { Competance } from 'src/app/monClass/Competance';
import { CatService } from 'src/app/monService/catService.service';
  
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  utilisateur: Utilisateur={
    id: 0,
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    password: '',
    rolesUtilisateur: [],
    etat: false,
    tel: '',
     photo: '',
  
  };
  roles: any;
  nomRoles: string;
  listCat: CategoriesServices[];
 
     constructor(private adminService:AdminService , private catService:CatService
        ,private authAdmin:AdminAuthService, private router:Router , private activatedRoute:ActivatedRoute){}

   ngOnInit() {
    
    this.catService.allCat().subscribe((data:CategoriesServices[])=>{
      this.listCat=data
    }) 
      if(this.loginOrNot()){
        this.adminService.getUserInformation().subscribe((data:Utilisateur)=>{
          console.log(data)
         this.utilisateur=data
         this.nomRoles=this.utilisateur.rolesUtilisateur[0].nomRoles
        })
      }
       
    
  
  
  }
  goListCompByCateg(id:number){
    this.router.navigate(['/listComp',{id}])
  }
  goToMyMessageClient() {
    this.router.navigate(['/chatclient'])
    }
    goToMyMessagePrest() {
      this.router.navigate(['/chatprest'])
    }
 loginOrNot(){
	return this.authAdmin.isLoggedIn();
}
logout(){
  this.router.navigate(['/login'])
  return this.authAdmin.clear()
}
goToMyProfil() {
this.router.navigate(['/profils']).then(()=>{
  location.reload()
})
}
goToProfilClient() {
  this.router.navigate(['/profilClient']).then(()=>{
    location.reload()
  })  }
  }
 
 
 


