import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component'; 
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { AuthRedirectGuard } from './auth/AuthRedirectGuard ';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { ListPrestComponent } from './pages/list-prest/list-prest.component';
import { ListServiceComponent } from './pages/list-service/list-service.component';
import { DemandeClientComponent } from './pages/demande-client/demande-client.component';
import { CategorieServiceComponent } from './pages/categorie-service/categorie-service.component';
import { ListpaymentComponent } from './pages/listpayment/listpayment.component';

const routes: Routes = [
 
  {
    path: '',
    component: IndexComponent,
    canActivate: [AuthGuard],
     
  }, {
    path: 'listpayment',
    component: ListpaymentComponent,
    canActivate: [AuthGuard],
     
  },{
      path: 'home',
      component: IndexComponent,
      canActivate: [AuthGuard],
       
    },{
      path: 'cat',
      component: CategorieServiceComponent,
      canActivate: [AuthGuard],
       
    },
    {
      path: 'listclient',
      component: ListClientComponent,
      canActivate: [AuthGuard],
       
    },
    {
      path: 'services',
      component: ListServiceComponent,
      canActivate: [AuthGuard],
       
    }, {
      path: 'demande',
      component: DemandeClientComponent,
      canActivate: [AuthGuard],
       
    }, {
      path: 'listPrest',
      component: ListPrestComponent,
      canActivate: [AuthGuard],
       
    },
     { path: 'login', component: LoginComponent , canActivate: [AuthRedirectGuard]},
    { path: 'register', component: RegisterAdminComponent  , canActivate: [AuthRedirectGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
