import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Suivi clients',
    },
    children: [
      {
        path: '',
        redirectTo: 'clients',
      },
      {
        path: 'clients',
        component: ClientsComponent,
        data: {
          title: 'Clients',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiviClientsRoutingModule { }
