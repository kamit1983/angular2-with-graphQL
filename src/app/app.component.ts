import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular With GraphQL Demo';
  @ViewChild('appHome') appHome : HomeComponent;
  contentList : any[] =[];
  showVar : boolean  = false;
  
  ngOnInit() {
	  this.contentList = ["GRID", "GRAPH", "EDITOR", "FORMS"];
  }
  
  showContent(item) {
	this.appHome.show(item);
	this.showVar = true;
  }
}
