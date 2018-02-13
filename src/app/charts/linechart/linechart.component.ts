import { Component, OnInit } from '@angular/core';
import { ChartTypes , AllOptions, AllData } from "../../chartDefinition"
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  constructor() { }

  options;
  data;
  chartType;

  ngOnInit(){

    this.options = AllOptions.lineChart;
    this.data = AllData.lineChart;
  }

}
