import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { AdminAuthService } from './admin-auth.service';
import {  Utilisateur } from '../monClass/utilisateur';
 
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  
  
PATH_APP="http://localhost:8080/api/utilisateur"
  constructor(private httpClient:HttpClient) { }
  
  public getAllClient():Observable<Utilisateur[]>{
    return this.httpClient.get<Utilisateur[]>(`${this.PATH_APP+"/listClient"}`)
  }
  public getAllPres():Observable<Utilisateur[]>{
    return this.httpClient.get<Utilisateur[]>(`${this.PATH_APP+"/listPrest"}`)
  }
 public activeDesactiveUtilisateur(id:number):Observable<Utilisateur>{
  return this.httpClient.get<Utilisateur>(`${this.PATH_APP+"/activerDesactive/"+id}`)
 }
}
