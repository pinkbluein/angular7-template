import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TableComponent} from './table/table.component';
import {ServerTableComponent} from './server_table/server_table.component';
import {FormComponent} from './form/form.component';
import {DoubleTableComponent} from './double_table/double_table.component';


export const AdminRoutes: Routes = [
  {
    path: '',
    children: [{ path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: DashboardComponent,
      data: {
        heading: 'Dashboard'
      }
    }, {
      path: 'table',
      component: TableComponent,
      data: {
        heading: 'Table'
      }
    }, {
      path: 'server_table',
      component: ServerTableComponent,
      data: {
        heading: 'Server Table'
      }
    }, {
      path: 'double_table',
      component: DoubleTableComponent,
      data: {
        heading: 'Double Table'
      }
    }, {
      path: 'form',
      component: FormComponent,
      data: {
        heading: 'Form'
      }
    }]
}];
