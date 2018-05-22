import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/dataService/data-service.service';
import { ThemeService } from '../../services/themeService/theme.service';
import { WebSocketService } from '../../services/webSocketService/web-socket.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ratio',
  templateUrl: './ratio.component.html',
  styleUrls: ['./ratio.component.css']
})

export class RatioComponent implements AfterViewInit, OnChanges {
  @Input() ratiosInfo: any[];
  dataServiceImp: DataService;
  myChart: Chart;
  firstBoot = true;
  constructor(private _dataService?: DataService, private _themeService?: ThemeService) {
  }
  get dataService() {
    return this._dataService;
  }
  set dataService(dataService: DataService) {
    dataService = this._dataService;
  }
  get themeService() {
    return this._themeService;
  }
  set themeService(themeService: ThemeService) {
    themeService = this._themeService;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.firstBoot && !this.ratiosInfo) {
      this.ratiosInfo = [];
      this.drawGraph();
      return;
    } else if (this.firstBoot && this.ratiosInfo) {
      this.drawGraph();
      this.firstBoot = false ;
      return;
    }
    this.update();
}
update () {
  this.myChart.data.labels.push(this.ratiosInfo[0].pop());
  this.myChart.data.labels.shift();
  this.myChart.data.datasets.forEach((dataset) => {
    // dataset.data.push(this.ratiosInfo[1].pop());
      dataset.data.shift();
  });
  this.myChart.update();
}
  drawGraph() {
    const canvas: any = document.getElementById('myChart' );
      const ctx = canvas.getContext('2d');
       this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: this.ratiosInfo[0],
          datasets: [{
              label: 'Rations',
              data: this.ratiosInfo[1],
              borderColor : '#F78511',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
    }
    ngAfterViewInit() {}
}
