import { Component , Input, AfterViewInit, ViewChild } from '@angular/core';
import { ResultComponent } from './components/result/result.component';
import { ThemeService } from './services/themeService/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalObject: any;
  pagesNumber: number[];
  projects: any[];
  indexesObject: any;
  ratio: number;
  isNightModeOn = false;
  url: string = this.themeService.isNightModeOn ?
  './../assets/static/images/parallaxNight.jpg' : './../assets/static/images/parallaxDay.jpg';
  constructor(private themeService: ThemeService) {
    this.isNightModeOn = themeService.isNightModeOn;
  }
  @ViewChild(ResultComponent) child: ResultComponent;
  recieveModalFromResult($event) {
    this.modalObject = $event;
  }
  receiveIndexes($event) {
    this.indexesObject = $event;
  }
  recieveModalFromSearch($event) {
    this.modalObject = $event;
  }
  recieveProjectsFromSearch($event) {
    const size_and_index = Object.keys($event)[0];
    this.pagesNumber = Array(Math.ceil(+(size_and_index) / 4));
    this.projects = $event[size_and_index];
  }
  recieveRatioFromRatioComponent($event) {
    console.log(this.url);
    this.ratio = $event;
  }

}
