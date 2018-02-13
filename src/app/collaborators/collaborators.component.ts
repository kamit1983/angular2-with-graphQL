import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {
  private contributors: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let uri = 'https://api.github.com/repos/kamit1983/angular2-with-graphQL/contributors';
    this.http.get(uri).subscribe(data =>  {
      this.contributors = data;
    });
  }

}
