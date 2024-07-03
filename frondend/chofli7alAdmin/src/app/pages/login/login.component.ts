import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/monClass/utilisateur';
import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  utilisateur: Utilisateur={
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
  constructor(private router: Router, private adminService: AdminService, private authAdmin: AdminAuthService) {}
  ngOnInit(): void {
   }
   login(form: NgForm) {
    console.log(form.value)
    this.adminService.loginAdmin(form.value).subscribe(
      (data: any) => {
        console.log(data)
        this.authAdmin.setRoles(data.utilisateur.rolesUtilisateur);
        this.authAdmin.setToken(data.token);
        const roles = data.utilisateur.rolesUtilisateur[0].nomRoles;
         window.alert("Bien venu " + data.utilisateur.username);
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
   },
      (error: any) => {
        if (error.status) {
          
          window.alert("Vérifier votre nom d'utilisateur ou votre mot de passe.");
          this.router.navigate(['/login']);
        }
      }
    );
  }
  
}
