import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService/data-service.service';

@Component({
  selector: 'app-ratio',
  templateUrl: './ratio.component.html',
  styleUrls: ['./ratio.component.css']
})
export class RatioComponent implements OnInit {
 dataServiceImp : DataService;
  constructor(dataService : DataService) { 
    this.dataServiceImp = dataService;
  }

  ngOnInit() {
  }

}
