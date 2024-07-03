import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../monClass/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  URL="http://localhost:8080/api/utilisateur/"
  constructor(private http:HttpClient) { }

  public getAllClient():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.URL+"listClient"}`)
  }
  
  public getAllUtilisateurActive():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.URL+"allActive"}`)
  }
  public getAllUtilisateurInactive():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.URL+"allInactive"}`)
  }

  public changeEtatUtilisateur(id:number):Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${this.URL+"changeEtatUtilisateur/"+id}`)
  }
  public updateUtilisateur(user:Utilisateur):Observable<Utilisateur>{
    return this.http.put<Utilisateur>(`${this.URL+"updateUtilisateur"}`,user)
  }

  public getUtilisateur(id:number):Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${this.URL+"byId/"+id}`)
  }
  
  public getUserByEMAIL(email:string):Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${this.URL+"byemail/"+email}`)
  }
}
