import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/monClass/utilisateur';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit{
  listClient: Utilisateur[];
  constructor(private utilisateurServ:UtilisateurService , private router:Router){}
  ngOnInit(): void {
    this.utilisateurServ.getAllClient().subscribe((data:Utilisateur[])=>{
      console.log(data)
      this.listClient=data
    })
  }
activeDeactivUtilisateur(id:number){
  this.utilisateurServ.activeDesactiveUtilisateur(id).subscribe((data:Utilisateur)=>{
    if(data.etat){
      alert("Utilisateur Active")
      this.router.navigate(['/listclient']).then(()=>{
        location.reload()
      })
    }else{
      alert("Utilisateur Blocker")
      this.router.navigate(['/listclient']).then(()=>{
        location.reload()
      })
    }
  })
}
}
