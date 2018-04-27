import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {DataService} from './../../services/dataService/data-service.service';
import {AddModalComponent } from '../add-modal/add-modal.component'
declare var swal: any;
declare var Materialize: any;
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  shouldBeOpen = false;
  shouldBeActive : boolean[];
  dataServiceImp : DataService;
  resultPreloader : boolean = false;
  @Input() pagesNumber: number[];
  @Output() modalEmitter = new EventEmitter<any>();
  @Output() IndexesEmitter = new EventEmitter<any>();
  @Input() projects:any[];
  

  modalObject  = {'id':0,'name':'','description':'','deadline':'','option':1}


  constructor(public dataService: DataService) {
    this.dataServiceImp = dataService;
    this.pagesNumber = [];
    this.shouldBeActive = [];
    this.shouldBeActive[0] = true;

  }
  remove(id:number,event:any) {
    event.preventDefault();
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(() => {
      this.dataServiceImp.removeProject(id).subscribe(()=>{
        this.projects =  this.projects.filter((obj)=>{return obj.id !== id; });
        swal('Deleted!','Project deleted.', 'success');
      });
    })
  }
  updateProject(id:number, name: string, desc:string, deadline: string, event:any){
    if(!id  || !name  || !deadline  || !desc ) {
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
  SetPage_SendPagingSignal(event:any, minIndex:number, maxIndex: number, j:number){ 
    var indexesObject = {'minIndex':minIndex,'maxIndex':maxIndex };
    this.IndexesEmitter.emit(indexesObject);
    for (let i in this.shouldBeActive) {
      this.shouldBeActive[i]=false;
    }
    this.shouldBeActive[j]=true;
    console.log('emitting indexesObject of value '+ indexesObject.minIndex );

  }
    

}
