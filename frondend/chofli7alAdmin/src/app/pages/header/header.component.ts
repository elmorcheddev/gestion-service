import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import {  Utilisateur } from 'src/app/monClass/utilisateur';
  import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin: Utilisateur={
    id: 0,
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    password: '',
    etat: false,
    tel: '',
    photo: '',
    rolesUtilisateur: []
  };
  roles: any;
  nomRoles: string;
  
     constructor(private adminService:AdminService
        ,private authAdmin:AdminAuthService, private router:Router , private activatedRoute:ActivatedRoute){}

   ngOnInit() {
      
        if(this.authAdmin.isLoggedIn()){
          this.adminService.getUserInformation().subscribe((data:any)=>{
            console.log(data)
           this.admin=data
           this.nomRoles=this.admin.rolesUtilisateur[0].nomRoles
          });} 
    
  
  
  }
  
 loginOrNot(){
	return this.authAdmin.isLoggedIn();
}
logout(){
  this.router.navigate(['/login'])
  return this.authAdmin.clear()
}
 
  }
 
 
 


