import { Component, OnInit } from '@angular/core';
import { ChartTypes , AllOptions, AllData } from "../chartDefinition"
@Component({
  selector: 'app-multi-bar-horizontal-chart',
  templateUrl: './multi-bar-horizontal-chart.component.html',
  styleUrls: ['./multi-bar-horizontal-chart.component.css']
})
export class MultiBarHorizontalChartComponent implements OnInit {

  constructor() { }
  options;
  data;
  chartType;

  ngOnInit(){
    
    this.options = AllOptions.multiBarHorizontalChart;
    this.data = AllData.multiBarHorizontalChart;
  }

}
