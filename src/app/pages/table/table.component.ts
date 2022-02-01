import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Data } from 'src/app/interface/invoice.interface'
import { InvoiceService } from 'src/app/services/invoice.service';

let ELEMENT_DATA: Data[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private _InvoiceService: InvoiceService) {
    _InvoiceService.getinvoice()
    .subscribe(result => {this.dataSource.data = result},error =>{})
   }
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id','position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    debugger;
    this.dataSource.filter = filterValue.toString().trim().toLowerCase();
  }

}
