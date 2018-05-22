import { Component , Input, AfterViewInit, ViewChild } from '@angular/core';
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
  ratiosInfo: any[];
  isNightModeOn = false;
  url: string = this.themeService.isNightModeOn ?
'./../assets/static/images/parallaxNight.jpg' : './../assets/static/images/parallaxDay.jpg';
  constructor(private _themeService?: ThemeService) {
    this.isNightModeOn = _themeService.isNightModeOn;
  }
  get themeService() {
    return this._themeService;
  }
  set themeService(themeService: ThemeService) {
    themeService = this._themeService;
  }
  recieveModalFromResultNsearch($event) {
    this.modalObject = $event;
    console.log(this.modalObject);
  }

  recieveRatioFromResultNsearch($event) {
    this.ratiosInfo = $event;
  }

}
