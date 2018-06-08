import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../../services/webSocketService/web-socket.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  name: string;
  desc: string;
  deadline: string;
  projectBeforeDeadline: any[];
  overdueProjects: any[];
  constructor(private route: ActivatedRoute, private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.name = params['name'];
      this.desc = params['desc'];
      this.deadline = params['deadline'];

   });
   console.log('SCX2 initialize');
   this.webSocketService.projectBeforeDeadLineObservable.subscribe((res: any) => {
     this.projectBeforeDeadline = res;
     console.log('SCX2 Project Became True', res);
   });

   this.webSocketService.overdueProjectsObservable.subscribe((res: any) => {
     this.overdueProjects = res.slice(0, 4);
     console.log('SCX2 OVERDUE PROJETCQ ', this.overdueProjects);

   });
  }

}
