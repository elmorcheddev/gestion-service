import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AdminService } from '../../monService/admin.service';
import { AdminAuthService } from '../../monService/admin-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  
  constructor(private router: Router, private adminService: AdminService, private authAdmin: AdminAuthService) {}
  
  ngOnInit(): void {}
  
  login(form: NgForm) {
    if (form.invalid) {
      this.message = "Please fill in the form correctly.";
      return;
    }
    
    this.adminService.loginAdmin(form.value).subscribe(
      (data: any) => {
        this.authAdmin.setRoles(data.utilisateur.rolesUtilisateur);
        this.authAdmin.setToken(data.token);
        const roles = data.utilisateur.rolesUtilisateur[0].nomRoles;
        console.log(data)
        if(data.utilisateur.etat === true){
          window.alert("Bien venu " + data.utilisateur.username);
          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });
        } else {
          window.alert("Votre compte a ete desactive ");
          this.authAdmin.clear();
          this.router.navigate(['/login']).then(() => {
            window.location.reload();
          });
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.message = "Vérifier votre nom d'utilisateur ou votre mot de passe.";
        }
      }
    );
  }
}
