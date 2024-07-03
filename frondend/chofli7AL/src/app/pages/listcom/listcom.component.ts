import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesServices } from 'src/app/monClass/CategoriesServices';
import { Competance } from 'src/app/monClass/Competance';
 import { Utilisateur } from 'src/app/monClass/utilisateur';
import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
import { CatService } from 'src/app/monService/catService.service';
import { CompetanceService } from 'src/app/monService/competance.service';
 
@Component({
  selector: 'app-listcom',
  templateUrl: './listcom.component.html',
  styleUrls: ['./listcom.component.css']
})
export class ListcomComponent implements OnInit {

  id: any;
  listcomp: Competance[];
  listComById: Competance[];
  listCat: CategoriesServices[];
   selectedData: any;
  origin: string;
  destination: string;
  distance: string;
  competences: Competance[];
  utilisateur: Utilisateur={
    id: 0,
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    password: '',
    etat: false,
    tel: '',
    photo: '',
     rolesUtilisateur: []
  };
  adresse: string;
  competencies: Competance[];
  active: boolean=false;
  selectedCategory: any;
  showResults: boolean =false;
  compList: Competance[];
  listcompbycat: Competance[];
  constructor(private comService: CompetanceService,   private authAdmin: AdminAuthService,
    private adminService: AdminService, private catService: CatService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = +params['id']; 
      this.comService.compBycat(this.id).subscribe((data:Competance[])=>{
        this.listcompbycat=data
      })})
    if (this.loginOrNot()) {
      this.adminService.getUserInformation().subscribe((data: Utilisateur) => {
        console.log(data)
        this.utilisateur = data
      })
    }

    
        this.fetchCompetencies()
    
  

    this.catService.allCat().subscribe((data: CategoriesServices[]) => {
      this.listCat = data
    })
  }
  fetchCompetencies() {
    const filters = {
      adresse: this.adresse,
      categoryId: this.selectedCategory
    };

 


    if (this.authAdmin.isLoggedIn() && filters) {
      this.comService.getCompetenciesByFilters(filters)
      .subscribe((competencies: Competance[]) => {
        this.competencies = competencies;
        this.showResults = true; // Set to true when competencies are fetched
        console.log(competencies);
      });
      this.adminService.getDistance(this.utilisateur.adresse, this.adresse)
        .subscribe((distance: any) => {
          this.distance = distance;
          console.log(distance);
        });
    } else if (!this.authAdmin.isLoggedIn() && filters) {
      this.comService.getCompetenciesByFilters(filters)
      .subscribe((competencies: Competance[]) => {
        this.competencies = competencies;
        this.showResults = true; // Set to true when competencies are fetched
        console.log(competencies);
      });
      this.adminService.getDistance("tunis", this.adresse)
        .subscribe((distance: any) => {
          this.distance = distance;
          console.log(distance);
        });
    }
    if(!filters){
      this.comService.allComp().subscribe((data:Competance[])=>{
        console.log(data)
        this.compList=data
      })
    }
  }

 
  loginOrNot() {
    return this.authAdmin.isLoggedIn();
  }
  goListCompByCateg(id: number) {
    this.router.navigate(['/listComp', { id }])
  }
  goToProfilDetails(id: number) {
    this.router.navigate(['/profildetails', { id }])
  }
 

}
