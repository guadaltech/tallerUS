import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ClientApiService } from 'src/app/services/apis/client-api.service';
import { ClientModel } from 'src/app/utils/models/api/client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'gst-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent
{
  @Output() emit = new EventEmitter();

  constructor(private api: ClientApiService)
  {
  }

  async OnSubmit(event: NgForm)
  {
    await this.api.post(event.form.value);
    event.form.reset();
    this.emit.emit();
  }

}