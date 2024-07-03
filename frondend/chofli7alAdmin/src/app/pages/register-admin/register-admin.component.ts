import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  Utilisateur } from 'src/app/monClass/utilisateur';
  import { AdminService } from 'src/app/monService/admin.service';
 
@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent {
  message: string;
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
constructor(private adminService:AdminService, private router:Router){}
ngOnInit(): void {
 }
register(form: NgForm) {
  if (form.valid) {
 this.adminService.saveAdmin(this.admin).subscribe((data:Utilisateur)=>{
  console.log(data)
  if(data!== null){
    this.router.navigate(['/login'])
  }else if(data==null){
    this.message="there is a account Admin exist "
    console.log(this.message)
  }
 })
}else {
  form.control.markAllAsTouched();
}
}

}
