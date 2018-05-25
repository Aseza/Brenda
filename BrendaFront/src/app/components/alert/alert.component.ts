import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService/data-service.service';
import { WebSocketService } from '../../services/webSocketService/web-socket.service';
declare var $: any;
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  dummyAray: any[];
  projectBeforeDeadline: any[];
  overdueProjects: any[];

  constructor(private _webSocketService?: WebSocketService ) {

  }

  get webSocketService() {
    return this._webSocketService;
  }
  set webSocketService(webSocketService: WebSocketService) {
    webSocketService = this._webSocketService;
  }
  ngOnInit() {
    console.log('SCX initialize');
    this.webSocketService.projectBeforeDeadLineObservable.subscribe((res: any) => {
      this.projectBeforeDeadline = res;
      console.log('SCX Project Became True', res);
    });

    this.webSocketService.overdueProjectsObservable.subscribe((res: any) => {
      this.overdueProjects = res.slice(0, 4);
      console.log('SCX OVERDUE PROJETCQ ', this.overdueProjects);

    });
  }
  refClick() {
    console.log('Clicked');
  }
  openRightNav() {
    $('.rightNav').sideNav('show');
  }

}
