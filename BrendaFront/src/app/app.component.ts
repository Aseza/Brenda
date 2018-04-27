import { Component , Input,AfterViewInit, ViewChild } from '@angular/core';
import { ResultComponent } from './components/result/result.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalObject :any;
  pagesNumber:number[];
  projects:any[];
  indexesObject : any;
  @ViewChild(ResultComponent) child:ResultComponent;
  recieveModalFromResult($event){
    this.modalObject = $event;
  }
  receiveIndexes($event){
    this.indexesObject = $event;
  }
  recieveModalFromSearch($event){
    this.modalObject = $event;
  }
  recieveProjectsFromSearch($event){
    let size_and_index = Object.keys($event)[0];    
    this.pagesNumber = Array(Math.ceil(+(size_and_index)/4));
    this.projects = $event[size_and_index];
    

  }
}
