import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { AdminAuthService } from './admin-auth.service';
import {  Utilisateur } from '../monClass/utilisateur';
import { Competance } from '../monClass/Competance';
import { CategoriesServices } from '../monClass/CategoriesServices';
 
@Injectable({
  providedIn: 'root'
})
export class catService {
  
  constructor(private httpClient:HttpClient){}
PATH_APP="http://localhost:8080/api/cat"
 
getAllCat():Observable<CategoriesServices[]>{
    return this.httpClient.get<CategoriesServices[]>(`${this.PATH_APP}`+"/allcatAdmin")
}
ajouterCat(cat:FormData):Observable<CategoriesServices>{
    return this.httpClient.post<CategoriesServices>(`${this.PATH_APP}`+"/ajouter",cat)
}
 
public getCatByID(id:number):Observable<CategoriesServices>{
    return this.httpClient.get<CategoriesServices>(`${this.PATH_APP+"/byIdAdmin/"+id}`)
  }
}
