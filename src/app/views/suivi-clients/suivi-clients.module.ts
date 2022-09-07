import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiviClientsRoutingModule } from './suivi-clients-routing.module';
import { ClientsComponent } from './clients/clients.component';



import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    NavModule,
    ProgressModule,
    TableModule,
    TabsModule, 
    IconModule,   
    SuiviClientsRoutingModule
  ]
})
export class SuiviClientsModule { }
