import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() { }

  public chartAndGraphClicked : boolean = false;
  public formsClicked : boolean = false;
  public rootMenuClicked: boolean = false;

  ngOnInit() {
  }
  // handleRootMenuClicked(event){
  //   event.stopPropagation();
	//   this.rootMenuClicked = true;
  // }

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
