import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DepartamentService } from '../../services/departament/departament.service';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  FormGroup: FormGroup;
  @Input() employee : any;
  departaments: any;
  edit = false
  @Input() dataSource;
 
  status = ['Activo', 'Baja', 'Ausente']
  constructor(private fb: FormBuilder, private departamentApi: DepartamentService, private employeeApi: EmployeeService) {
    this.FormGroup = this.fb.group({
      name: [''],
      job: [''],
      departmentId: [''],
      state: ['']
    });

  }

  ngOnInit() {
    if (!this.employee) {
      this.employee = {};
      this.edit = false
      this.employee.departmentId="departamentos"
      this.employee.state="state"
      
    } else {
      this.edit = true
     
    }


    this.departamentApi.get().then(data => {
      this.departaments = data
    }).catch(err => {
      alert("ERROR")
    })
  }

  back(){
    this.employeeApi.editar = false
  }
  onClickSubmit() {
    let values = JSON.stringify(this.FormGroup.value)
    values = JSON.parse(values)
 
    if (this.edit) {
      
      for(let dept of this.departaments){
        if(dept.id==this.employee['departmentId'])
        this.employee['department']=dept.name
      }
       
      this.employeeApi.patch(this.employee['id'], this.employee).then(data => {
        this.employeeApi.editar = false
      })

    } else {

 
      this.employeeApi.post(values).then(data => {
        
        for(let dept of this.departaments){
          if(dept.id==values['departmentId'])
          data['department']=dept.name
        }
        this.dataSource['data'].push(data)
        this.dataSource.data = this.dataSource.data.slice();
        this.employeeApi.editar = false
        
       
      
      })
    }

  }

}
