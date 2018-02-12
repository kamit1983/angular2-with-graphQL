import { Component, OnInit } from '@angular/core';
import { ChartTypes , AllOptions, AllData } from "../chartDefinition"

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  options;
  data;
  chartType;

  ngOnInit() {

    this.options = AllOptions.pieChart

    this.data = AllData.pieChart
  }

  

}
