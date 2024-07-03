import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesServices } from 'src/app/monClass/CategoriesServices';
import { catService } from 'src/app/monService/cat.service';

@Component({
  selector: 'app-categorie-service',
  templateUrl: './categorie-service.component.html',
  styleUrls: ['./categorie-service.component.css']
})
export class CategorieServiceComponent implements OnInit{


  photo: string | Blob;
  cat: CategoriesServices={
    id: 0,
    photo: '',
    nomCat: '',
    descriptionCat: ''
  };

  listCat: CategoriesServices[];
  constructor(private catService:catService, private router:Router){}
  ngOnInit(): void {
    this.catService.getAllCat().subscribe((data:CategoriesServices[])=>{
      this.listCat=data
    })
  }
  fileSelected(event: any) {
    this.photo = event.target.files[0];
    }
    ajouterCat(from: NgForm) {
      const formData=new FormData()
      formData.append('photo', this.photo);
      formData.append('cat', new Blob([JSON.stringify(this.cat)], { type: 'application/json' }));
      
      this.catService.ajouterCat(formData).subscribe((data:CategoriesServices)=>{
        console.log(data)
        if(data!== null){
          alert("categorie ajouter avec success")
          this.router.navigate(['/cat']).then(()=>{
            location.reload()
          })
        }else{
          alert("categorie exist deja")

        }
      })
     }
     getByID(id: number) {
      this.catService.getCatByID(id).subscribe((data:CategoriesServices)=>{
        this.cat=data
      })
    }
    
    onDelete(_t15: number) {
    throw new Error('Method not implemented.');
    }
  
}
