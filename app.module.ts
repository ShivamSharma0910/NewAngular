import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateLeadComponent } from './create-lead/create-lead.component';
import { ShowLeadComponent } from './show-lead/show-lead.component';
import { HttpClientModule } from '@angular/common/http';
import  { HttpClientJsonpModule} from "@angular/common/http"


const myRoutes =[
   {path:"",component:HomeComponent},
   {path:"home",component:HomeComponent},
   {path:"about",component:AboutusComponent},
   {path:"contact",component:ContactusComponent},
   {path:"creatlead",component:CreateLeadComponent},
   {path:"showlead",component:ShowLeadComponent},
   {path:"**",component:ErrorComponent}
   ]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ErrorComponent,
    CreateLeadComponent,
    ShowLeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myRoutes),ReactiveFormsModule,HttpClientModule,HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
