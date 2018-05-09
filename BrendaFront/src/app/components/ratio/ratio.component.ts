import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/dataService/data-service.service';
import { ThemeService } from '../../services/themeService/theme.service';

@Component({
  selector: 'app-ratio',
  templateUrl: './ratio.component.html',
  styleUrls: ['./ratio.component.css']
})

export class RatioComponent implements OnInit {
  @Input() ratio: number;
  // ratioa: number = 50;
 dataServiceImp: DataService;
  constructor(private dataService: DataService, private themeService: ThemeService) {
  }

  ngOnInit() {
    this.ratio = 0;
  }

}
