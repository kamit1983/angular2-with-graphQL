import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() { }
  
  private chartAndGraphClicked : boolean = false;
  private formsClicked : boolean = false;
  
  ngOnInit() {
  }
  
  chartClicked(event) {
	  event.stopPropagation();
	  this.chartAndGraphClicked = true;
  }
  
  formMenuClicked(event){
	  event.stopPropagation();
	  this.formsClicked = true;
  }
  
  collapseAll(){
	  this.chartAndGraphClicked = false;
	  this.formsClicked = false;
  }

}
