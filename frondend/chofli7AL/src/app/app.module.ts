import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.intercepter';
import { AdminService } from './monService/admin.service';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { HighchartsChartModule } from 'highcharts-angular';
 import { ProfilsComponent } from './pages/mon-profils/profils/profils.component';
import { ListdemandeComponent } from './pages/mon-profils/listdemande/listdemande.component';
import { ListcomComponent } from './pages/listcom/listcom.component';
import { ProfilsdetailsComponent } from './pages/profilsdetails/profilsdetails.component'; // Import HighchartsChartModule
import {MatGridListModule} from '@angular/material/grid-list';
 import { ProfilClinetComponent } from './pages/profilClient/profil-clinet/profil-clinet.component';
import { ListdemandeClientComponent } from './pages/profilClient/listdemande-client/listdemande-client.component';
import { ChatComponent } from './pages/mon-profils/chat/chat.component';
import { ChatclientComponent } from './pages/profilClient/chatclient/chatclient.component';
import { MotpasseoblierComponent } from './pages/motpasseoblier/motpasseoblier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,


    LoginComponent,

    RegisterComponent,
      ProfilsComponent,
     ListdemandeComponent,
     ListcomComponent,
     ProfilsdetailsComponent,
      ProfilClinetComponent,
     ListdemandeClientComponent,
     ChatComponent,
     ChatclientComponent,
     MotpasseoblierComponent,
  ],
  imports: [
    HighchartsChartModule,MatGridListModule,
    BrowserModule, FormsModule, MatIconModule, ReactiveFormsModule, MatFormFieldModule, MatDialogModule,
    AppRoutingModule, HttpClientModule, MatButtonModule, BrowserAnimationsModule
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true


  },
    AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
