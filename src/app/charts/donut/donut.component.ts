import { Component, OnInit } from '@angular/core';
import { ChartTypes , AllOptions, AllData } from "../../chartDefinition"

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  constructor() { }
  options;
  data;
  chartType;

  ngOnInit(){
    
    this.options = AllOptions.donutChart;
    this.data = AllData.donutChart;
  }
  
}
