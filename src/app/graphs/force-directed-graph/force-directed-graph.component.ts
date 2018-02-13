import { Component, OnInit } from '@angular/core';
import { ChartTypes , AllOptions, AllData } from "../../chartDefinition"

@Component({
  selector: 'app-force-directed-graph',
  templateUrl: './force-directed-graph.component.html',
  styleUrls: ['./force-directed-graph.component.css']
})
export class ForceDirectedGraphComponent implements OnInit {

  constructor() { }
  options;
  data;
  chartType;

  ngOnInit(){
    
    this.options = AllOptions.forceDirectedGraph;
    this.data = AllData.forceDirectedGraph;
  }
}
