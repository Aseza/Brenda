import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../../services/dataService/data-service.service';
import { ThemeService } from '../../services/themeService/theme.service';

@Component({
  selector: 'app-prolife',
  templateUrl: './prolife.component.html',
  styleUrls: ['./prolife.component.css']
})
export class ProlifeComponent implements AfterViewInit {
  myChart: Chart;
  overviewArray: number[];
  constructor(private dataService: DataService, private themeService: ThemeService) {
   }
getProjectsOverview() {
    this.dataService.getProjectsOverview().subscribe((res: number[]) => {
        this.overviewArray = res;
    });
}
ngAfterViewInit() {
      this.draw();
  }
 draw() {
  this.getProjectsOverview();
  const canvas: any = document.getElementById('myChart2' );
  if (!canvas) {
    setTimeout(() => this.draw(), 1000);
  }
  const ctx = canvas.getContext('2d');
   this.myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ['Approaching', 'Overdue', 'Other'],
      datasets: [{
          label: 'Rations',
          data: this.overviewArray,
          borderColor : '#F78511',
          borderWidth: 1,
          backgroundColor: ['#FFCD56', '#FF6384', '#36A2EB']

      }]
  }
});
 }
}
