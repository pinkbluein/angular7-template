import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {TableService} from '../../services/table.service';

const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
  selector: 'app-server-table',
  templateUrl: './server_table.component.html',
  styleUrls: ['./server_table.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ServerTableComponent implements OnInit {

  rows :any = [];

  constructor(private tableService: TableService) {
    this.loadTableData();
  }


  loadTableData() {
    this.tableService.get_table_items().subscribe(res => {
      this.rows = res;
    }, error1 => {
      console.log(error1);
    });
  }




  ngOnInit() {

  }

}
