import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import { Subscription } from 'rxjs/Subscription';
import { StompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { WsMessage } from '../environement';
import { DataService } from '../dataService/data-service.service';
declare var Materialize: any;


@Injectable()
export class WebSocketService {
  projectBeforeDeadline: any[];
  overdueProjects: any[];

  constructor(private _stompService: StompService, private _dataService: DataService) {
    this._stompService.subscribe('/topic/DeadLineAlert').map((message) =>  {
      const res: WsMessage = JSON.parse(message.body);
       return res;
    } ).subscribe((res: any) => {
        this.projectBeforeDeadline = res;
});
this._stompService.subscribe('/topic/OverdueAlert').map((message) =>  {
  const res: WsMessage = JSON.parse(message.body);
   return res;
} ).subscribe((res: any) => {
    this.overdueProjects = res.slice(0, 4);
    console.log('OVERDUE PROJETCQ ',this.overdueProjects);
    
});
   }

}

//     const stomp_subscription = this._stompService.subscribe('/topic/AddAlert');
//     stomp_subscription.map((message) =>  {
//       const res: WsMessage = JSON.parse(message.body);
//        return res;
//     } ).subscribe(res => {
//       Materialize.toast('New Project Added: ' + res.name + ' id: ' + res.description  , 5000);
// });
