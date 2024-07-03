import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoriesServices } from 'src/app/monClass/CategoriesServices';
import { Competance } from 'src/app/monClass/Competance';
  import { fileHandel } from 'src/app/monClass/filehandel';
import { Utilisateur } from 'src/app/monClass/utilisateur';
import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
import { CatService } from 'src/app/monService/catService.service';
import { CompetanceService } from 'src/app/monService/competance.service';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent implements OnInit{
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
  listComp: Competance[];
  competance: Competance={
    id: 0,
    description: '',
    nombeExperience: 0,
    prestatire: new Utilisateur,
    productImages: [],
    adresse: '',
    categoriesServices: new CategoriesServices
  };
  photo: string | Blob;
  listCat: CategoriesServices[];
  
 

 
 
  constructor( private catService:CatService,
              private adminService:AdminService ,
              private utilisateurSrvice:UtilisateurService,
              private competanceService:CompetanceService,
              private sanitizer:DomSanitizer,
              private authAdmin:AdminAuthService, private router:Router){}
  ngOnInit(): void {
    if(this.authAdmin.isLoggedIn()){
      this.adminService.getUserInformation().subscribe((data:Utilisateur)=>{
        console.log(data)
       this.utilisateur=data
       this.nomRoles=this.utilisateur.rolesUtilisateur[0].nomRoles
      });
     
      this.catService.allCat().subscribe((data:CategoriesServices[])=>{
        this.listCat=data
      }) 
     
    }
    this.getComptByPrest() ;
 
  }
  getComptByPrest(){
    if(this.authAdmin.isLoggedIn()){
      this.adminService.getUserInformation().subscribe((data:Utilisateur)=>{
        console.log(data)
       this.utilisateur=data
       this.nomRoles=this.utilisateur.rolesUtilisateur[0].nomRoles
       this.competanceService.compByPrest(this.utilisateur.id).subscribe((data:Competance[])=>{
        console.log(data)
        this.listComp=data
      }) });
    }
   
  }
  saveCompForPrest(form:NgForm){
    const productFormDate=  this.preparFormData(this.competance)
    this.competanceService.saveComp(productFormDate).subscribe(
    (response : Competance)=>{console.log(response)
        form.reset()
        this.competance.productImages=[]
        this.router.navigate(['/profils']).then(()=>{
          location.reload()
        })
      },
    (error:HttpErrorResponse)=>{console.log(error)})
   }
   preparFormData(comp:Competance):FormData{
    const formData=new FormData
    formData.append('comm',new Blob([JSON.stringify(comp)],{ type:'application/json'}));
    formData.append('userId', this.utilisateur.id.toString());

    for(var i =0 ; i<comp.productImages.length;i++){
      formData.append('imageFile',
      comp.productImages[i].file,
      comp.productImages[i].file.name);
    }
      return formData;
    
      }
   onFileSelected(event:any) {
    if(event.target.files){
       const fileProd=   event.target.files[0];
        const filehandel:fileHandel={
    file:fileProd,
    url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileProd))
  }
  this.competance.productImages.push(filehandel)
     
  }
}
removeImage(i:number){
  this.competance.productImages.splice(i,1);
}
}
