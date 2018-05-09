import { Component, OnInit, Output, EventEmitter, Input, DoCheck, IterableDiffers, SimpleChanges, OnChanges } from '@angular/core';
import { DataService } from '../../services/dataService/data-service.service';
import { ThemeService } from '../../services/themeService/theme.service';
declare var Materialize: any;
declare var swal: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {
  word: string;
  // Preloader and error related, only for asserting.
  searchPreloader = false;
  isNoResponse = true;

  // Implemnting the dataService to handle BackEnd reaqests.
  pagesNumber;
  // Emitting a modal with an option = 0 to open the modal in "Add mode" versus "Update Mode" when option = 1.
  @Output() modalEmitter = new EventEmitter<any>();
  modalObject  = {'option': 0};
  @Input()
  indexesObject: any ;
  itemsPerPage: number;
  // Emitting the result to the ResultComponent to handle displaying data
  @Output() projectsObjectEmitter = new EventEmitter<any>();
  @Output() ratioEmitter = new EventEmitter<any>();

  constructor(private dataService: DataService, private themeService: ThemeService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.indexesObject) {
    this.Search(this.word, changes.indexesObject.currentValue.minIndex, this.indexesObject.maxIndex, event, false);
  }}

  ngOnInit() {
      this.indexesObject = {'minIndex': 0, 'maxIndex': 4};
  }

  SendModal() {
    this.modalEmitter.emit(this.modalObject);
  }
  wordChanged() {
    if (this.word) {
      // this.indexesObject = {'minIndex':0,'maxIndex':4};
      this.ngOnInit();
    }
  }
  Search(word: string, minIndex: number , maxIndex: number, event: any, isFirstSearch: boolean) {
    if (isFirstSearch) { console.log('FirstSearchDetected');
    this.indexesObject.minIndex = 0;
    }
    console.log('Search is Called with word  ' + word + ' and minIndex is ' + this.indexesObject.minIndex);

    if (!word) {
      Materialize.toast('Please enter a word first!', 2000);
      return;
    }
    this.searchPreloader = true;
    this.dataService.searchAProject(word, minIndex, maxIndex).subscribe(result => {
    this.isNoResponse = false;
    if (Object.keys(result)[0] === '0') {
      Materialize.toast('Nothing matches your query.', 2000) ;
       this.searchPreloader = false;
      }
      this.projectsObjectEmitter.emit(result);
      this.searchPreloader = false;
      this.dataService.getRatio().subscribe(res => {
        this.ratioEmitter.emit(res);
        console.log('sending Ratio...' + res );
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
}
