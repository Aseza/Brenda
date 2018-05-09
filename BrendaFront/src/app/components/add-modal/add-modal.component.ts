import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/dataService/data-service.service';
declare var swal: any;
declare var Materialize: any;

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  @Input('modal')
  modal: any ;
  constructor(private dataService: DataService) {
  }

   createProject(name: string, description: string, deadline: string) {
    if (!name  || !deadline  || !description ) {
      Materialize.toast('All inputs are required', 2000);
      return;
    }
    this.dataService.createProject(name, description, deadline).subscribe((res) => {
      swal('Project Succesfully Added!', '', 'success');
    });
  }

  updateProject() {
    console.log('the modal contains: ' + this.modal);
    console.log('updating...' + name);
    this.dataService.updateProject(this.modal.id, this.modal.name, this.modal.description, this.modal.deadline).subscribe();
    swal('Project Succesfully Edited!', ':)', 'success');
  }

  ngOnInit() {
  }

}
