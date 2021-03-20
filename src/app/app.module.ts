import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';

import {MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxSpinnerModule } from "ngx-spinner";

import { TreeviewModule } from 'ngx-treeview';
import {MatSelectModule} from '@angular/material/select';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { CollapseModule, MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ChangepasswordComponent,
    ForgotPasswordComponent,

   
  
  ],
  imports: [
    RouterModule,
    TreeviewModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    CollapseModule,
    WavesModule,
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatTreeModule,
    MatTooltipModule,
    MatStepperModule,
    MatIconModule,
    MatTabsModule,
    ChartsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatRadioModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
