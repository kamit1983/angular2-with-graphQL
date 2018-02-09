import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public donutChartData = [{
    id: 0, // number
    label: 'Swati',  // string
    value: 12,  // number
    color: 'red'
  }, {
    id: 1, // number
    label: 'Amit',  // string
    value: 14,  // number
    color: 'pink'
  }, {
    id: 1, // number
    label: 'Niju',  // string
    value: 16,  // number
    color: '#eee'
  }]
  public pieChartData = [{
    id: 0,
    label: 'Angular',
    value: 120,
    color: '6490d6',
  }, {
    id: 1,
    label: 'React',
    value: 180,
    color: '4e535b',
  }, {
    id: 2,
    label: 'Vue',
    value: 60,
    color: 'ce1c31',
  }]

  public colors = ['4e535b', '6490d6', 'ce1c31']
  public singleBarData = [1]; // Single Bar Chart
  public stackedBarData = [3]; // Stacked Bar Chart
  public multiStackedBarData = [2, 1]; // Multi Stacked Bar Chart
  public barChartData = [{
    id: 0,
    label: 'Doe',
    value1: 10,
    value2: 5,
    value3: 15,
  }, {
    id: 1,
    label: 'John',
    value1: 20,
    value2: 8,
    value3: 10,
  }]


}
