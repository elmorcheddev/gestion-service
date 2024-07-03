import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../monClass/utilisateur';
import { Competance } from '../monClass/Competance';
import { CategoriesServices } from '../monClass/CategoriesServices';
import { Review } from '../monClass/review';
import { Demande } from '../monClass/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  URL="http://localhost:8080/api/demande/"
  constructor(private http:HttpClient) { }

 
 public  ajouterDemande(formData: FormData) :Observable<Demande>{
    return this.http.post<Demande>(`${this.URL+"add"}`, formData)
  }
 
  public listDemandeByClient(id:number):Observable<Demande[]>{
    return this.http.get<Demande[]>(`${this.URL+"byClient/"+id}`)
  }
  public listDemandeByPrest(id:number):Observable<Demande[]>{
    return this.http.get<Demande[]>(`${this.URL+"byPrest/"+id}`)
  }
  public accepter(id:number):Observable<Demande>{
    return this.http.get<Demande>(`${this.URL+"accepter/"+id}`)
  }
  public refuser(id:number):Observable<Demande>{
    return this.http.get<Demande>(`${this.URL+"refuse/"+id}`)
  }
  public listDemandeByClientAccepter(id:number):Observable<Demande[]>{
    return this.http.get<Demande[]>(`${this.URL+"listDbyClient/"+id}`)
  }
  public listDemandeByPrestAccepter(id:number):Observable<Demande[]>{
    return this.http.get<Demande[]>(`${this.URL+"listDbyPrest/"+id}`)
  }
}
