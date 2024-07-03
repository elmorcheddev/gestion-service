import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Utilisateur } from '../../monClass/utilisateur';
  import { AdminService } from '../../monService/admin.service';
import { UtilisateurService } from '../../monService/utilisateur.service';
 import { AdminAuthService } from '../../monService/admin-auth.service';
import * as Highcharts from 'highcharts';
import Chart from 'chart.js/auto';
import { CatService } from 'src/app/monService/catService.service';
import { CategoriesServices } from 'src/app/monClass/CategoriesServices';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  public chartOptions: Highcharts.Options = {}; 

  utilisateur: Utilisateur;
  nomRoles: string;
  listUtilisateur: Utilisateur[];
  listCat: CategoriesServices[];
  
 

 
 
  constructor( 
              private adminService:AdminService ,
              private utilisateurSrvice:UtilisateurService,
          
              private catService:CatService,
              private authAdmin:AdminAuthService, private router:Router){}
  ngOnInit(): void {
    if(this.authAdmin.isLoggedIn()){
      this.adminService.getUserInformation().subscribe((data:Utilisateur)=>{
        console.log(data)
       this.utilisateur=data
       this.nomRoles=this.utilisateur.rolesUtilisateur[0].nomRoles
      });
    }
     this.catService.allCat().subscribe((data:CategoriesServices[])=>{
      this.listCat=data
    }) 
 
  }
 
  goListCompByCateg(id:number){
    this.router.navigate(['/listComp',{id}])
  }
  
 
  public loginOrNot(){
    return this.authAdmin.isLoggedIn();
  }
  logout() {
    this.router.navigate(['/login'])
    return this.authAdmin.clear()
  }
}
