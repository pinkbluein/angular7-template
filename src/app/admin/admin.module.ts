import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';
import {AdminRoutes} from './admin.routing';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuService} from '../core/menu/menu.service';
import {TranslatorService} from '../core/translator/translator.service';
import {menu} from './menu';
import {TableComponent} from './table/table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ServerTableComponent} from './server_table/server_table.component';
import {TableService} from '../services/table.service';
import {FormComponent} from './form/form.component';
import {DoubleTableComponent} from './double_table/double_table.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    NgxDatatableModule
  ],
  declarations: [
    DashboardComponent,
    TableComponent,
    ServerTableComponent,
    FormComponent,
    DoubleTableComponent
  ],
  providers: [
    TableService
  ]
})

export class AdminModule {
  constructor(public menuService: MenuService, tr: TranslatorService) {
    menuService.addMenu(menu);
  }
}
