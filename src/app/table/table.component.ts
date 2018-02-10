import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const Profiles = gql`query{
  profiles {
    name
  }
}`;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private data: any;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
  }
  fetch(){
    this.apollo.watchQuery<any>({
      query: Profiles
    })
      .valueChanges
      .subscribe(({data}) => {
        this.data = data;
      });
  }
}
