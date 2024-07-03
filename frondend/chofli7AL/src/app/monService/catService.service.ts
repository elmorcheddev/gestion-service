import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../monClass/utilisateur';
import { Competance } from '../monClass/Competance';
import { CategoriesServices } from '../monClass/CategoriesServices';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  URL="http://localhost:8080/api/cat/"
  constructor(private http:HttpClient) { }

 
  
  public allCat():Observable<CategoriesServices[]>{
    return this.http.get<CategoriesServices[]>(`${this.URL+"allCat"}`)
  }
  public getCatByID(id:number):Observable<CategoriesServices>{
    return this.http.get<CategoriesServices>(`${this.URL+"byId/"+id}`)
  }
}
