import { Component, OnInit } from '@angular/core';
import { ChartTypes , AllOptions, AllData } from "../chartDefinition"
@Component({
  selector: 'app-box-plot-chart',
  templateUrl: './box-plot-chart.component.html',
  styleUrls: ['./box-plot-chart.component.css']
})
export class BoxPlotChartComponent implements OnInit {

  constructor() { }
  options;
  data;
  chartType;

  ngOnInit(){

    this.options = AllOptions.boxPlotChart;

    this.data = AllData.boxPlotChart;
  }

}
