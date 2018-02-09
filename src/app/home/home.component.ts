import { Component, Input, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() showMePartially: boolean;
  showGrid: boolean = false;
  showCrud: boolean = false;
  showForm: boolean = false;
  showDs: boolean = false;
  expandView: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  
  show(item) {
	 if(item === 'GRID'){
		this.showGrid = true;
	 } else{
		this.showGrid = false;
	 }
	 if(item === 'GRAPH'){
		this.showCrud = true;
	 } else{
		this.showCrud = false; 
	 } 
	 if(item === 'EDITOR'){
		this.showForm = true; 
	 } else{
		this.showForm = false; 
	 }
	 if(item === 'FORMS'){
		this.showDs = true; 
	 } else{
		this.showDs = false; 
	 }
  }

}
