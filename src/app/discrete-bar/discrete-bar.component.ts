import { Component, OnInit } from '@angular/core';
import { ChartTypes , AllOptions, AllData } from "../chartDefinition"
@Component({
  selector: 'app-discrete-bar',
  templateUrl: './discrete-bar.component.html',
  styleUrls: ['./discrete-bar.component.css']
})
export class DiscreteBarComponent implements OnInit {

  constructor() { }

  options;
  data;
  chartType;

  ngOnInit(){

    this.options = AllOptions.discreteBarChart;

    this.data = AllData.discreteBarChart;
  }

}
