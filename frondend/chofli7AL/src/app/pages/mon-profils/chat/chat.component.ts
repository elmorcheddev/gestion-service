// chat.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Message } from 'src/app/monClass/Message';
import { Demande } from 'src/app/monClass/demande';
import { Utilisateur } from 'src/app/monClass/utilisateur';
import { MessageService } from 'src/app/monService/MessageService';
import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
import { DemandeService } from 'src/app/monService/demande.service';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  utilisateur: Utilisateur = new Utilisateur();
  nomRoles: any;
  listDemandeByPrest: Demande[];
  message: Message  ={
    idMsg: 0,
    sender: new Utilisateur,
    recipient: new Utilisateur,
    content: '',
    timestamp: ''
  }
  listmsgAdmin: Message[];
  listmsgUser: Message[];
  msglist: Message[];
  user: Utilisateur = new Utilisateur();
  active: boolean=false;

  constructor(
    private adminService: AdminService,
    private messageService: MessageService,
    private utilisateurService: UtilisateurService,
    private demandeService: DemandeService,
    private authAdmin: AdminAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authAdmin.isLoggedIn()) {
      this.adminService.getUserInformation().subscribe((data: Utilisateur) => {
        this.utilisateur = data;
        this.nomRoles = this.utilisateur.rolesUtilisateur[0].nomRoles;
        this.demandeService.listDemandeByPrestAccepter(this.utilisateur.id).subscribe((data: Demande[]) => {
          this.listDemandeByPrest = data;
        });
      });
    }
  }

  public getMessage(id: number) {
    this.active=true
    this.router.navigate(['/chatprest', { id }]);

    if (this.authAdmin.isLoggedIn()) {
      this.adminService.getUserInformation().subscribe((data: any) => {
        this.message.sender.id = data.id;
        this.message.recipient.id = id;

        const adminMessages$ = this.messageService.listMessageAdminUser(data.id, id);
        const userMessages$ = this.messageService.listMessageAdminUser(id, data.id);

        forkJoin([adminMessages$, userMessages$]).subscribe(
          ([adminMessages, userMessages]: [Message[], Message[]]) => {
            this.listmsgAdmin = adminMessages;
            this.listmsgUser = userMessages;
            this.mergeAndSortMessages();
          }
        );
      });
    }
  }

  private mergeAndSortMessages() {
    const mergedMessages = [...this.listmsgAdmin, ...this.listmsgUser];
    this.msglist = mergedMessages.sort((a, b) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    });
  }

  public sendMessage(form: NgForm) {
    const formData = new FormData()
    formData.append('msg' ,  new Blob([JSON.stringify(this.message)], { type: 'application/json' }))
    
    formData.append('idSender', this.utilisateur.id.toString());
    formData.append('idrec', this.message.recipient.id.toString());

    this.messageService.sendMessage(formData).subscribe((data: Message) => {
      this.getMessage(this.message.recipient.id);
      this.message.content = '';
    });
  }
}
