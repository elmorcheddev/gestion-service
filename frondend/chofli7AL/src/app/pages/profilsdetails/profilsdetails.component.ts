import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesServices } from 'src/app/monClass/CategoriesServices';
import { Competance } from 'src/app/monClass/Competance';
import { ImageModel } from 'src/app/monClass/ImageModel';
import { Demande } from 'src/app/monClass/demande';
import { Payment } from 'src/app/monClass/payment';
 import { Review } from 'src/app/monClass/review';
import { Utilisateur } from 'src/app/monClass/utilisateur';
import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
import { CatService } from 'src/app/monService/catService.service';
import { CompetanceService } from 'src/app/monService/competance.service';
import { DemandeService } from 'src/app/monService/demande.service';
import { PaymentService } from 'src/app/monService/payment.service';
import { ReviewService } from 'src/app/monService/review.service';

@Component({
  selector: 'app-profilsdetails',
  templateUrl: './profilsdetails.component.html',
  styleUrls: ['./profilsdetails.component.css']
})
export class ProfilsdetailsComponent implements OnInit {

  id: number;
  profil: Competance={
    id: 0,
    description: '',
    nombeExperience: 0,
    prestatire: {
      id: 0,
      nom: '',
      prenom: '',
      adresse: '',
      email: '',
      password: '',
      etat: false,
      tel: '',
      photo: '',
      rolesUtilisateur: [],
    },
    productImages: [],
    adresse: '',
    categoriesServices: new CategoriesServices
  };
  listImage: ImageModel[];
activeIndex: number =0;
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
  nomRoles: string;
  listReview: Review[];
  review: Review={
    id: '',
    dateCreation: '',
    content: '',
    start: 0,
    client: new Utilisateur,
    competance: new Competance
  };
  taille: number;
  demande: Demande={
    id: 0,
    description: '',
    client: new Utilisateur,
    prest: new Utilisateur,
    enAttent: true,
    etat: false
  };
  listbycomp: Competance[];
  numberStart: number;
payment: Payment ={
  id: 0,
  client: new Utilisateur,
  prest: new Utilisateur,
  price: '',
  paymentMethod: ''
};
  constructor(private comService:CompetanceService,private catService:CatService ,
    private demandeService:DemandeService,
    private authAdmin:AdminAuthService,private adminService:AdminService,
    private reviewService:ReviewService,
    private paymentService:PaymentService ,
    private router:Router, private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = +params['id'];  
      if(this.id){
        this.comService.compById(this.id).subscribe((data:Competance)=>{
          console.log(data)
          this.profil=data
          this.comService.compByPrest(data.prestatire.id).subscribe((data:Competance[])=>{
            this.listbycomp=data
          })
          this.comService.getImageByComp(this.id).subscribe((data:ImageModel[])=>{
              this.listImage=data
          })
        })
       }else{
        this.router.navigate(['/listComp'])
      
        }
    })
    this.getavg()

    if(this.loginOrNot()){
      this.adminService.getUserInformation().subscribe((data:Utilisateur)=>{
        console.log(data)
       this.utilisateur=data
       this.nomRoles=this.utilisateur.rolesUtilisateur[0].nomRoles
      })

    }
    this.allReview()

      }
      autoSlide() {
        setInterval(() => {
          this.next();
        }, 3000); 
      }
    
      next() {
        this.activeIndex = (this.activeIndex + 1) % this.listImage.length;
      }
    
      prev() {
        this.activeIndex = (this.activeIndex - 1 + this.listImage.length) % this.listImage.length;
      }
      loginOrNot(){
        return this.authAdmin.isLoggedIn();
      }
      public saveNewReview(form:NgForm){
        const formData = new FormData();
         formData.append('review', new Blob([JSON.stringify(this.review)], { type: 'application/json' }));
    
         formData.append('compId', this.profil.id.toString());
         formData.append('userId', this.utilisateur.id.toString());
    
        this.reviewService.addReview(formData).subscribe((data:Review)=>{
            console.log(data)
            if(data!==null){
              const id=data.competance.id
              this.router.navigate(['/profildetails',{id}]).then(()=>{
                location.reload()
              })
            }else{
              alert("vous avez deja envoyer une review")
            }
 
            this.allReview()
        })
      }
      public allReview(){
        this.reviewService.listReviewByComm(this.id).subscribe((data:Review[])=>{
          this.listReview=data
          this.taille=this.listReview.length
       })
     
      }
      getavg(){
        this.reviewService.avergerating(this.id).subscribe((data:any)=>{
          this.numberStart=data
          console.log(data)
         })
      }
      public ajouterDemande(form:NgForm){
        const formData= new FormData()
        formData.append('demande', new Blob([JSON.stringify(this.demande)], { type: 'application/json' }));
    
        formData.append('prestId', this.profil.prestatire.id.toString());
        formData.append('clientId', this.utilisateur.id.toString());
   
        this.demandeService.ajouterDemande(formData).subscribe((data:Demande)=>{
          console.log(data)
          if(data!== null){
            window.alert("Voter demande a tet envoyer ")
            const id = this.profil.id
            this.router.navigate(['/profildetails',{id}]).then(()=>{
              location.reload()
            })
          }else{
            window.alert("Vous deja envoyer une demande ")
            const id = this.profil.id
            this.router.navigate(['/profildetails',{id}]).then(()=>{
              location.reload()
            })
          }
        })
      }
      goToProfilDetails(id: number) {
        console.log(id)
        this.router.navigate(['/profildetails', { id }])
      }
      gotoChat(id:number){
        this.router.navigate(['/chatclient', { id }]);

      }
      ajouterPaiement(form: NgForm) {
        const formData= new FormData()
        formData.append('pay', new Blob([JSON.stringify(this.payment)], { type: 'application/json' }));
    
        formData.append('prestId', this.profil.prestatire.id.toString());
        formData.append('clientId', this.utilisateur.id.toString());   
        this.paymentService.sendPyment(formData).subscribe((data:Payment)=>{
          console.log(data)
          if(data!== null){
            alert("votre payment a ete fini ")
            const id = this.id
             this.router.navigate(['/profildetails',{id}]).then(()=>{
              location.reload()
             })
          }else{
            alert("dejapayee ")
            const id = this.id
             this.router.navigate(['/profildetails',{id}]).then(()=>{
              location.reload()
             })
          }
         })
      }
       }
  
 
 
