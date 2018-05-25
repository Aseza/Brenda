import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges, OnChanges, Injectable } from '@angular/core';
import { DataService } from '../../services/dataService/data-service.service';
import { ThemeService } from '../../services/themeService/theme.service';
declare var Materialize: any;
declare var swal: any;
@Injectable()
@Component({
  selector: 'app-result-nsearch',
  templateUrl: './result-nsearch.component.html',
  styleUrls: ['./result-nsearch.component.css']
})
export class ResultNsearchComponent {
  searchPreloader = false;
  isNoResponse = true;
  pagesNumber;
  isProjectsExist = false;
  @Output() modalEmitter = new EventEmitter<any>();
  @Output() ratioEmitter = new EventEmitter<any>();
  itemsPerPage: number;
  projects: any[];
  indexesObject = {'minIndex': 0, 'maxIndex': 4};
  modalObject  = {'id': 0, 'name': '', 'description': '', 'deadline': '', 'option': 1};
  shouldBeOpen = false;
  collection: number[] = [];
  @Input() word: string;

  constructor(private _dataService?: DataService, private _themeService?: ThemeService) {
    this.projects = [];
  }
  get dataService() {
    return this._dataService;
  }
  set dataService(dataService: DataService) {
    dataService = this._dataService;
  }
  get themeService() {
    return this._themeService;
  }
  set themeService(themeService: ThemeService) {
    themeService = this._themeService;
  }
  openModal() {
    console.log('opening Modal');
    this.modalEmitter.emit({'option': 0});
  }

  Search(word: string, minIndex: number , maxIndex: number) {
    if (!word) {
      Materialize.toast('Please enter a word first!', 2000);
      return;
    }
    this.searchPreloader = true;
    this.dataService.searchAProject(word, minIndex, maxIndex).subscribe((result: any) => {
    this.isNoResponse = false;
    if (Object.keys(result)[0] === '0') {
      Materialize.toast('Nothing matches your query.', 2000) ;
       this.searchPreloader = false;
      }
      const size_and_index = Object.keys(result)[0];
      this.pagesNumber = Array(Math.ceil(+(size_and_index) / 4));
      this.projects = result[size_and_index];
      this.isProjectsExist = true;
      this.searchPreloader = false;

      this.dataService.getRatios().subscribe((ratios: any[]) => {
        const ratiosValues: number[] = ratios.map(obj => obj.id);
        const ratiosIds: number[] = ratios.map(obj => obj.ratio);
        this.ratioEmitter.emit([ratiosValues.reverse(), ratiosIds.reverse()]);
      });

    }, err => {
      swal('Error Occured', '', 'warning');
      this.searchPreloader = false;
    });


    setTimeout(() => {
      if (this.isNoResponse) {
      swal('No Response', 'Please Check Your DB status', 'warning');
      this.searchPreloader = false;
      this.isNoResponse = true;
      }
    }, 5000);
  }
  pager(pageNumber: number, pageSize: number) {
    this.Search(this.word, pageNumber, pageSize);
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
}
