import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
   import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
 import { RegisterComponent } from './pages/register/register.component';
 import { AuthRedirectGuard } from './auth/AuthRedirectGuard ';
 import { ProfilsComponent } from './pages/mon-profils/profils/profils.component';
import { ListdemandeComponent } from './pages/mon-profils/listdemande/listdemande.component';
import { ListcomComponent } from './pages/listcom/listcom.component';
import { ProfilsdetailsComponent } from './pages/profilsdetails/profilsdetails.component';
 import { ProfilClinetComponent } from './pages/profilClient/profil-clinet/profil-clinet.component';
import { ListdemandeClientComponent } from './pages/profilClient/listdemande-client/listdemande-client.component';
import { ChatComponent } from './pages/mon-profils/chat/chat.component';
import { ChatclientComponent } from './pages/profilClient/chatclient/chatclient.component';
import { MotpasseoblierComponent } from './pages/motpasseoblier/motpasseoblier.component';
 

const routes: Routes = [
   { path: "home", component: IndexComponent   },
   { path: "profils", component: ProfilsComponent ,canActivate: [AuthGuard]  },
   { path: "profilClient", component: ProfilClinetComponent ,canActivate: [AuthGuard]  },
   { path: "motdepasseoblie", component: MotpasseoblierComponent   },
   { path: "chatprest", component: ChatComponent ,canActivate: [AuthGuard]  },
   { path: "chatclient", component: ChatclientComponent ,canActivate: [AuthGuard]  },
   { path: "demandeClient", component: ListdemandeClientComponent ,canActivate: [AuthGuard]  },
    { path: "listdemande", component: ListdemandeComponent ,canActivate: [AuthGuard]  },
   { path: "listComp", component: ListcomComponent },
   { path: "profildetails", component: ProfilsdetailsComponent },

     { path: "login", component: LoginComponent ,canActivate: [AuthRedirectGuard] },
  { path: "register", component: RegisterComponent  ,canActivate: [AuthRedirectGuard]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
