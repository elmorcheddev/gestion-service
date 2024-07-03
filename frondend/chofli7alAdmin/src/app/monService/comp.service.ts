import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { AdminAuthService } from './admin-auth.service';
import {  Utilisateur } from '../monClass/utilisateur';
import { Competance } from '../monClass/Competance';
 
@Injectable({
  providedIn: 'root'
})
export class CompetanceService {
  
  constructor(private httpClient:HttpClient){}
PATH_APP="http://localhost:8080/api/comm"
 
getAllCompetance():Observable<Competance[]>{
    return this.httpClient.get<Competance[]>(`${this.PATH_APP}`+"/all")
}
}
