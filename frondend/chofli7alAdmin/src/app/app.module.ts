import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from'@angular/common/http';

import {MatIconModule} from '@angular/material/icon';
  import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
 import { IndexComponent } from './pages/index/index.component';
 import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.intercepter';
import { AdminService } from './monService/admin.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { FormsModule } from '@angular/forms';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { ListPrestComponent } from './pages/list-prest/list-prest.component';
import { CategorieServiceComponent } from './pages/categorie-service/categorie-service.component';
import { ListServiceComponent } from './pages/list-service/list-service.component';
import { DemandeClientComponent } from './pages/demande-client/demande-client.component';
import { ListpaymentComponent } from './pages/listpayment/listpayment.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     IndexComponent,
     LoginComponent,
    RegisterAdminComponent,
    ListClientComponent,
    ListPrestComponent,
    CategorieServiceComponent,
    ListServiceComponent,
    DemandeClientComponent,
    ListpaymentComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatButtonModule,FormsModule,MatIconModule,MatRadioModule,
    HttpClientModule,MatCardModule, BrowserAnimationsModule
  ],
  providers: [  AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true 
    
  },
  AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
