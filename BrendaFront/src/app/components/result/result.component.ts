import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {DataService} from './../../services/dataService/data-service.service';
import {AddModalComponent } from '../add-modal/add-modal.component';
import { ThemeService } from '../../services/themeService/theme.service';
declare var swal: any;
declare var Materialize: any;
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  shouldBeOpen = false;
  collection: number[] = [];
  @Input() pagesNumber: number[];
  @Output() modalEmitter = new EventEmitter<any>();
  @Output() IndexesEmitter = new EventEmitter<any>();
  @Input() projects: any[];
  modalObject  = {'id': 0, 'name': '', 'description': '', 'deadline': '', 'option': 1};


  constructor(private dataService: DataService, private themeService: ThemeService) {

  }

  remove(id: number, event: any) {
    event.preventDefault();
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((deleted) => {
      if (deleted) {
        console.log('Deleting...');
        this.dataService.removeProject(id).subscribe(() => {
        this.projects =  this.projects.filter((obj) =>  obj.id !== id);
        swal('Deleted!', 'Project deleted.', 'success');
      });
    } else  {
      console.log('Cancelled');
      }
    });
  }
  updateProject(id: number, name: string, desc: string, deadline: string, event: any) {
    if (!id  || !name  || !deadline  || !desc ) {
      Materialize.toast('All inputs are required', 2000);
      return;
    }
    this.modalObject.deadline = deadline;
    this.modalObject.description = desc;
    this.modalObject.name = name;
    this.modalObject.id = id;
    this.modalEmitter.emit(this.modalObject);
    this.shouldBeOpen = true;
  }
  ngOnInit() {
  }

  SendPagingSignal(minIndex: number, maxIndex: number, j: number) {
console.log('Calling Other page');
    this.IndexesEmitter.emit({'minIndex': minIndex, 'maxIndex': maxIndex });
  }
}
