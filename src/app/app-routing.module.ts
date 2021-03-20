import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';


import { BikesreportsComponent } from './modules/bikesreports/bikesreports.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { GeneralComponent } from './modules/general/general.component';
import { LivelocationComponent } from './modules/livelocation/livelocation.component';
import { ManagecustomerComponent } from './modules/managecustomer/managecustomer.component';
import { ManagefleetComponent } from './modules/managefleet/managefleet.component';
import { ManagepriceComponent } from './modules/manageprice/manageprice.component';
import { ManageroleComponent } from './modules/managerole/managerole.component';
import { ManagestandComponent } from './modules/managestand/managestand.component';
import { ManageuserComponent } from './modules/manageuser/manageuser.component';
import { ManagezonesComponent } from './modules/managezones/managezones.component';
import { OperatorComponent } from './modules/operator/operator.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { SalesreportComponent } from './modules/salesreport/salesreport.component';
import { ZsoonComponent } from './modules/zsoon/zsoon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes: Routes = [ 
 
  
  {path:'',redirectTo:'login',pathMatch:'full' },
  {

  path:'',
  component: DefaultComponent,
  children:[{
    path:'dashboard',
    component: DashboardComponent
  },
{
  path: 'posts',
  component: PostsComponent
},
{
  path: 'managecustomer',
  component: ManagecustomerComponent
},



{
  path: 'manageuser',
  component: ManageuserComponent
},



{
  path: 'managefleet',
  component: ManagefleetComponent
},

// view component start










// view component ends

// profile component
{
  path: 'profile',
  component: ProfileComponent
},
// profile component

// edit component 












// edit component ends




{
  path: 'managezones',
  component: ManagezonesComponent
},


{
  path: 'manageprice',
  component: ManagepriceComponent
},

{
  path: 'managestand',
  component: ManagestandComponent
},



{
path: 'livelocation',
component: LivelocationComponent
},

{
  path: 'managerole',
  component: ManageroleComponent
},
{
  path: 'zsoon',
  component: ZsoonComponent
},



{
  path: 'general',
  component: GeneralComponent
},
{
  path: 'operator',
  component: OperatorComponent
},




{
  path: 'salesreport',
  component: SalesreportComponent
},
{
  path: 'bikesreports',
  component: BikesreportsComponent
}

]
},

{
  path: 'login', component: LoginComponent
},

{
path: 'forgot-password',
component: ForgotPasswordComponent
},


{
  path: 'changepassword',
  component: ChangepasswordComponent
},
{path: 'default', component: DefaultComponent}, 


// {
//   path: 'manageuser',
//   component: ManageuserComponent
// } 

{path:'**',component:PageNotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
