import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/monClass/demande';
import { DemandeService } from 'src/app/monService/demande.service';

@Component({
  selector: 'app-demande-client',
  templateUrl: './demande-client.component.html',
  styleUrls: ['./demande-client.component.css']
})
export class DemandeClientComponent implements OnInit{
  listDemande: Demande[];
  constructor(private demandeService:DemandeService){}
   ngOnInit(): void {
    this.demandeService.getAllDemandeAccepter().subscribe((data:Demande[])=>{
this.listDemande=data
    })  }

}
