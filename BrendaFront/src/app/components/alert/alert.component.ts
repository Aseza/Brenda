import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService/data-service.service';
import { WebSocketService } from '../../services/webSocketService/web-socket.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  dummyAray: any[];
  constructor(private _webSocketService?: WebSocketService ) {

  }

  get webSocketService() {
    return this._webSocketService;
  }
  set webSocketService(webSocketService: WebSocketService) {
    webSocketService = this._webSocketService;
  }
  ngOnInit() {

  }

}
