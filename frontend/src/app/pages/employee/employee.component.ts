import { Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  employees: any;
  editar =false
  employee:any;
  constructor(public employeApi: EmployeeService, private changeDetectorRefs:ChangeDetectorRef) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  columnNames = [
    {
      id: "actions",
      value: "Actions"
    },
    {
      id: "name",
      value: "NOMBRE"
    },
    {
      id: "department",
      value: "DEPARTAMENTO"
    },
    {
      id: "job",
      value: "PUESTO"
    },
    {
      id: "state",
      value: "ESTADO"
    }];
  staticColumns = ['button'];
  ngOnInit() {

    this.displayedColumns = this.columnNames.map(x => x.id)
    this.employeApi.editar = false
    this.employeApi.get().then(data => {
      this.employees = data
      this.createTable();
    })
  }

  createTable() {
    let tableArr: Element[] = []
     
    this.employees.forEach(element => {

      tableArr.push({ name: element.name, departmentId: element.departmentId, department: element.department.name, job: element.job, state: element.state, id: element.id })
    })

    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.sort = this.sort;
  }

  removeEmployee(employee) {


    this.employeApi.delete(employee.id).then(data => {

      this.dataSource.data = this.dataSource.data.filter(function (obj) {

        return obj.id !== employee.id;
      });
    }).catch(err => {
      console.error(err)
    })
  }

  edit(employee) {

    this.employee = employee
    this.employeApi.editar = true
  }
  crear() {
    delete this.employee
    this.employeApi.editar = true
    
  }
  
}

export interface Element {

  id: string,
  name: string,
  departmentId: string,
  department: string
  job: string,
  state: string,
}