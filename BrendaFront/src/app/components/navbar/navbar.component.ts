import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/themeService/theme.service';
import { WebSocketService } from '../../services/webSocketService/web-socket.service';
import { locateHostElement } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo = 'Brenda';
  isNightModeOn = false;
  constructor(private _themeService?: ThemeService) {
   }
   get themeService() {
    return this._themeService;
  }
  set themeService(themeService: ThemeService) {
    themeService = this._themeService;
  }
  ngOnInit() {
  }
  changed() {
    this.themeService.isNightModeOn = this.isNightModeOn;
  }

}
