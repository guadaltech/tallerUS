import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ClientApiService } from 'src/app/services/apis/client-api.service';
import { ClientModel } from 'src/app/utils/models/api/client';

@Component({
  selector: 'gst-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit
{
  dataSource;
  displayedColumns = [];

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  clients: Array<ClientModel>;

  constructor(private api: ClientApiService)
  {
  }

  applyFilter(filterValue: string)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  columnNames =
    [
      {
        id: "name",
        value: "NOMBRE"
      },
      {
        id: "company",
        value: "EMPRESA"
      },
      {
        id: "nif",
        value: "NIF"
      },
      {
        id: "sector",
        value: "SECTOR"
      },
      {
        id: "email",
        value: "EMAIL"
      },
      {
        id: "phone",
        value: "TELÉFONO"
      },
    ];

  ngOnInit()
  {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.getClients();
  }

  async getClients()
  {
    this.clients = await this.api.get();
    this.createTable();
  }

  createTable()
  {
    this.dataSource = new MatTableDataSource(this.clients);
    this.dataSource.sort = this.sort;
  }

}