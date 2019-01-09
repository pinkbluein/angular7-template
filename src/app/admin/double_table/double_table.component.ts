import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {TableService} from '../../services/table.service';

const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
  selector: 'app-double-table',
  templateUrl: './double_table.component.html',
  styleUrls: ['./double_table.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DoubleTableComponent implements OnInit {

  rows :any = [];
  selected_rows : any= {
    selected : []
  };

  constructor(private tableService: TableService) {
    this.loadTableData();
  }


  loadTableData() {
    this.tableService.get_table_items().subscribe(res => {
      this.rows = res;
      this.rows.forEach(function (row) {
        row.is_selected = false;
      });
    }, error1 => {
      console.log(error1);
    });
  }

  addToRight(row) {
    row.is_selected = true;
    this.selected_rows.selected = this.selected_rows.selected.concat(row);
  }




  ngOnInit() {

  }

}
