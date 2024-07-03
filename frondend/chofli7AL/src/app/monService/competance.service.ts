import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../monClass/utilisateur';
import { Competance } from '../monClass/Competance';
import { ImageModel } from '../monClass/ImageModel';

@Injectable({
  providedIn: 'root'
})
export class CompetanceService {
 
  URL="http://localhost:8080/api/comm/"
  constructor(private http:HttpClient) { }

  getCompetenciesByFilters(filters: { adresse: string, categoryId: number }) {
    let params = new HttpParams();
    if (filters.adresse) {
        params = params.append('adresse', filters.adresse);
    }
    if (filters.categoryId) {
        params = params.append('categoryId', filters.categoryId.toString());
    }
    return this.http.get<Competance[]>(`${this.URL+'competencies'}`, { params });
}
  public saveComp(comp:FormData):Observable<Competance>{
    return this.http.post<Competance>(`${this.URL+"saveComm"}`,comp)
  }
  public getImageByComp(id:number):Observable<ImageModel[]>{
    return this.http.get<ImageModel[]>(`${this.URL+"competence/"+id+"/images"}`)

  }
  getCompetenciesByAdresse(adresse: string):Observable<Competance[]> {
    return this.http.get<Competance[]>(`${this.URL}getByadresse?adresse=${adresse}`);
  }
  compById(id: number) :Observable<Competance>{
    return this.http.get<Competance>(`${this.URL+"findById/"+id}`)
  }
  public allComp():Observable<Competance[]>{
    return this.http.get<Competance[]>(`${this.URL+"all"}`)
  }
  public compByPrest(id:number):Observable<Competance[]>{
    return this.http.get<Competance[]>(`${this.URL+"allCompByPREST/"+id}`)
  }
  public compBycat(id:number):Observable<Competance[]>{
    return this.http.get<Competance[]>(`${this.URL+"categories/"+id}`)
  }
}
