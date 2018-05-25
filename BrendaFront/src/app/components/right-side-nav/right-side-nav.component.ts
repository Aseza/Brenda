import { Component, OnInit, OnChanges } from '@angular/core';
import { WebSocketService } from '../../services/webSocketService/web-socket.service';

@Component({
  selector: 'app-right-side-nav',
  templateUrl: './right-side-nav.component.html',
  styleUrls: ['./right-side-nav.component.css']
})
export class RightSideNavComponent implements OnInit {
  projectBeforeDeadLine: any[] = [];
  overdueProjects: any[] = [];

  constructor(private webSocketService: WebSocketService) {
   }

  ngOnInit() {
    console.log(' SCX RIGHT NAV LOADED');
    this.webSocketService.projectBeforeDeadLineObservable.subscribe((res1: any) => {
      this.projectBeforeDeadLine = res1;
      this.webSocketService.overdueProjectsObservable.subscribe((res2: any) => {
        this.overdueProjects = res2 ;
        console.log('SCX ALL');
      });
    });

  }
}
