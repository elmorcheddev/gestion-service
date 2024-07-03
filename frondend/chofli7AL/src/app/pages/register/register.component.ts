import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { UtilisateurService } from '../../monService/utilisateur.service';
import { Utilisateur } from '../../monClass/utilisateur';
import { AdminService } from 'src/app/monService/admin.service';
import { CategoriesServices } from 'src/app/monClass/CategoriesServices';
import { CatService } from 'src/app/monService/catService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string;
  utilisateur: Utilisateur = {
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
  image: any;
  listCat: CategoriesServices[];
  photo: any;
  selectedAccountType: any;

  constructor(private utilisateurService: UtilisateurService,
              private inscriUtilisateur: AdminService,
              private catService: CatService,
              private router: Router) {}

  ngOnInit(): void {}

  registerClient(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    const formData = new FormData();
    formData.append('photo', this.photo);
    formData.append('utilisateur', new Blob([JSON.stringify(this.utilisateur)], { type: 'application/json' }));
    
    this.inscriUtilisateur.saveClient(formData).subscribe((data: Utilisateur) => {
      if (data) {
        window.alert("Votre compte Client a été créé avec succès");
        this.router.navigate(['/login']);
      } else {
        console.log(this.message);
      }
    });
  }

  registerPrest(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    const formData = new FormData();
    formData.append('photo', this.photo);
    formData.append('utilisateur', new Blob([JSON.stringify(this.utilisateur)], { type: 'application/json' }));
    
    this.inscriUtilisateur.savePrest(formData).subscribe((data: Utilisateur) => {
      if (data) {
        window.alert("Votre compte Prestataire a été créé avec succès");
        this.router.navigate(['/login']);
      } else {
        console.log(this.message);
      }
    });
  }

  toggleForm() {}

  fileSelected(event: any) {
    this.photo = event.target.files[0];
    console.log(event.target.files[0]);
  }
}
