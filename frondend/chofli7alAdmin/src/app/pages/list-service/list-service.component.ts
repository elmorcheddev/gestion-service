import { Component, OnInit } from '@angular/core';
import { Competance } from 'src/app/monClass/Competance';
import { CompetanceService } from 'src/app/monService/comp.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  listCom: Competance[];
  groupedCompetance: { [key: string]: Competance[] } = {};

  constructor(private comService: CompetanceService) {}

  ngOnInit(): void {
    this.comService.getAllCompetance().subscribe((data: Competance[]) => {
      this.listCom = data;
      this.groupCompetanceByPrestataire();
    });
  }

  groupCompetanceByPrestataire(): void {
    this.groupedCompetance = this.listCom.reduce((group, item) => {
      const prestataireName = `${item.prestatire.nom} ${item.prestatire.prenom}`;
      if (!group[prestataireName]) {
        group[prestataireName] = [];
      }
      group[prestataireName].push(item);
      return group;
    }, {} as { [key: string]: Competance[] });
  }
}
