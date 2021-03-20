import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ManageuserComponent } from 'src/app/modules/manageuser/manageuser.component';
import { ManageroleComponent } from 'src/app/modules/managerole/managerole.component';
import { ManagecustomerComponent } from 'src/app/modules/managecustomer/managecustomer.component';
import { MatStepperModule } from '@angular/material/stepper';

import { ZsoonComponent } from 'src/app/modules/zsoon/zsoon.component';
import { GeneralComponent } from 'src/app/modules/general/general.component';
import { OperatorComponent } from 'src/app/modules/operator/operator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';
import { ManagefleetComponent } from 'src/app/modules/managefleet/managefleet.component';
import { ManagepriceComponent } from 'src/app/modules/manageprice/manageprice.component';
import { ManagestandComponent } from 'src/app/modules/managestand/managestand.component';
import { LivelocationComponent } from 'src/app/modules/livelocation/livelocation.component';
import { ManagezonesComponent } from 'src/app/modules/managezones/managezones.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BikesreportsComponent } from 'src/app/modules/bikesreports/bikesreports.component';
import { SalesreportComponent } from 'src/app/modules/salesreport/salesreport.component';
import { TreeviewModule } from 'ngx-treeview';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { CollapseModule, MDBBootstrapModule,WavesModule,} from 'angular-bootstrap-md';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ManageuserComponent,
    ManageroleComponent,
    ManagecustomerComponent,
    ZsoonComponent,
    GeneralComponent,
    OperatorComponent,
    ManagefleetComponent,
    ManagepriceComponent,
    ManagestandComponent,
    LivelocationComponent,
    ManagezonesComponent,
    BikesreportsComponent,
    SalesreportComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    CollapseModule,
    WavesModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatStepperModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTreeModule,
    NgxSpinnerModule,
    MatProgressBarModule,
    MatRadioModule,
  ],
})
export class DefaultModule {}
