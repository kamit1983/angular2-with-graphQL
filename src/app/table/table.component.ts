import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const Profiles = gql`query{
  profiles(pageLength: 50) {
    name
  }
}`;
const createProfile = gql`
  mutation createProfile($id: String!,
      $provider: String!,
      $name: String!,
      $email: String!,
      $profileStatus: String!,
      $designation: Int!,
    $aiclevel: String!,
    $skills: SKILLSINPUT!,
    $_firstCreatedBy: String!,
      $_lastUpdatedBy: String!,
      $_firstCreatedTimestamp: String!,
      $_lastUpdatedTimestamp: String!
) {
    createProfile(data: {id: $id, provider: $provider,
      name: $name,
      email: $email,
      profileStatus: $profileStatus,
      designation: $designation,
    aiclevel: $aiclevel,
    skills: $skills,
    _firstCreatedBy: $_firstCreatedBy,
      _lastUpdatedBy: $_lastUpdatedBy,
      _firstCreatedTimestamp: $_firstCreatedTimestamp,
      _lastUpdatedTimestamp: $_lastUpdatedTimestamp
}) {
  name
    }
  }
`;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private data: any = [];
  constructor(private apollo: Apollo) {}

  ngOnInit() {
  }
  fetch(){
    this.apollo.watchQuery<any>({
      query: Profiles
    })
      .valueChanges
      .subscribe(({data}) => {
        this.data = data.profiles.map(p=>{
          return p;
        });
      });
  }
  create(){
      this.apollo.mutate({
      mutation: createProfile,
      variables: {
        id:Math.round(Math.random()*10000),
        provider: "a",
        name:"Amit" + Math.round(Math.random()*10000),
        email:"Amit@gmail.com",
        profileStatus: "active",
        designation:1,
      aiclevel: "r",
      skills:{
        ui:[]
      },_firstCreatedBy:"Amit",
        _lastUpdatedBy:"test",
        _firstCreatedTimestamp: "01-01-2018",
        _lastUpdatedTimestamp: "01-01-2018"
      }
    }).subscribe(({ data }) => {
      this.data.push(data.createProfile);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }
}
