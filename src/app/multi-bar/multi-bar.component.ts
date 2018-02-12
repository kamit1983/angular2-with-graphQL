import { Component, OnInit } from '@angular/core';
import { ChartTypes , AllOptions, AllData } from "../chartDefinition"

@Component({
  selector: 'app-multi-bar',
  templateUrl: './multi-bar.component.html',
  styleUrls: ['./multi-bar.component.css']
})
export class MultiBarComponent implements OnInit {

  constructor() { }
  options;
  data;
  chartType;

  ngOnInit(){
    
    this.options = AllOptions.multiBarChart;
    this.data = AllData.multiBarChart;
  }

}
