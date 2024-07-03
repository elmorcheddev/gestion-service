import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
import { UtilisateurService } from 'src/app/monService/utilisateur.service'; 
import { DemandeService } from 'src/app/monService/demande.service';
import { Chart } from 'chart.js/auto'; 
import { Competance } from 'src/app/monClass/Competance';
import { Demande } from 'src/app/monClass/demande';
import { Utilisateur } from 'src/app/monClass/utilisateur';
import { CompetanceService } from 'src/app/monService/comp.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listClient: Utilisateur[] = [];
  listPrest: Utilisateur[] = [];
  listCom: Competance[] = [];
  listDemande: Demande[] = [];
  doughnutChart: any;

  constructor(
    private adminService: AdminService,
    private authAdmin: AdminAuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private utilisateurServ: UtilisateurService,
    private comService: CompetanceService,
     private demandeService: DemandeService
  ) {}

  ngOnInit(): void {
    this.loadClients();
    this.loadPrestataires();
    this.loadCompetances();
    this.loadDemandes();
    this.initializeChart();
  }

  loadClients() {
    this.utilisateurServ.getAllClient().subscribe((data: Utilisateur[]) => {
      this.listClient = data;
      this.updateChart();
    });
  }

  loadPrestataires() {
    this.utilisateurServ.getAllPres().subscribe((data: Utilisateur[]) => {
      this.listPrest = data;
      this.updateChart();
    });
  }

  loadCompetances() {
    this.comService.getAllCompetance().subscribe((data: Competance[]) => {
      this.listCom = data;
      this.updateChart();
    });
  }

  loadDemandes() {
    this.demandeService.getAllDemandeAccepter().subscribe((data: Demande[]) => {
      this.listDemande = data;
      this.updateChart();
    });
  }

  initializeChart() {
    const ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
    this.doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Clients', 'Prestataires', 'Services', 'Demandes Acceptées'],
        datasets: [{
          label: 'Count',
          data: [0, 0, 0, 0], // Initial data
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed !== null) {
                  label += context.parsed;
                }
                return label;
              }
            }
          }
        }
      }
    });
  }

  updateChart() {
    if (this.doughnutChart) {
      this.doughnutChart.data.datasets[0].data = [
        this.listClient.length,
        this.listPrest.length,
        this.listCom.length,
        this.listDemande.length
      ];
      this.doughnutChart.update();
    }
  }
}
