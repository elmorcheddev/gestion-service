import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/monClass/utilisateur';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';

@Component({
  selector: 'app-list-prest',
  templateUrl: './list-prest.component.html',
  styleUrls: ['./list-prest.component.css']
})
export class ListPrestComponent implements OnInit{
   
  listPrest: Utilisateur[];
  constructor(private utilisateurServ:UtilisateurService ,  private router:Router){}
  ngOnInit(): void {
    this.utilisateurServ.getAllPres().subscribe((data:Utilisateur[])=>{
      this.listPrest=data
    })
  }
  activeDeactivUtilisateur(id:number){
    this.utilisateurServ.activeDesactiveUtilisateur(id).subscribe((data:Utilisateur)=>{
      if(data.etat){
        alert("Utilisateur Active")
        this.router.navigate(['/listPrest']).then(()=>{
          location.reload()
        })
      }else{
        alert("Utilisateur Blocker")
        this.router.navigate(['/listPrest']).then(()=>{
          location.reload()
        })
      }
    })
  }
}
