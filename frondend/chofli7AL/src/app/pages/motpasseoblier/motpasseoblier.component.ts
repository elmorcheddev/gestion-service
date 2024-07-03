import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/monClass/utilisateur';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';

@Component({
  selector: 'app-motpasseoblier',
  templateUrl: './motpasseoblier.component.html',
  styleUrls: ['./motpasseoblier.component.css']
})
export class MotpasseoblierComponent implements OnInit {
utilissateur: Utilisateur={
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
  email: any;
ngOnInit(): void {
  this.activeRoute.params.subscribe(params => {
    this.email = +params['email'];  
    this.utilisateurService.getUserByEMAIL(this.email).subscribe((data:Utilisateur)=>{
      console.log(data)
    })
     
  })
}
constructor(private utilisateurService:UtilisateurService , private route:Router , private activeRoute:ActivatedRoute){}
getpassword(form: NgForm) {
  console.log(form.value.username)
  this.utilisateurService.getUserByEMAIL(form.value.username).subscribe((data:Utilisateur)=>{
    this.utilissateur=data
     
    const mail=data.email
    this.route.navigate(['/motdepasseoblie',{mail}])
  })
  }

}
