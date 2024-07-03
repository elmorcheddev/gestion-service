import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { AdminAuthService } from './admin-auth.service';
import {  Utilisateur } from '../monClass/utilisateur';
import { Demande } from '../monClass/demande';
 
@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  
  
PATH_APP="http://localhost:8080/api/demande"
  constructor(private httpClient:HttpClient) { }
  
  public getAllDemandeAccepter():Observable<Demande[]>{
    return this.httpClient.get<Demande[]>(`${this.PATH_APP+"/allAccepte"}`)
  }
   
 
}
