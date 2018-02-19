import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { NgModel } from '@angular/forms';

const Demos = gql`query{
  demos(pageLength: 50) {
    id,
	_firstCreatedTimestamp,
	categories,
	tagline
  }
}`;
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
  public data: any = [];
  public cars: any[]= [];
  public cols: any[] =[];
  public dataSource: any[]= [];
  public demoData: any[] =[];
  public carsData: any[] =[];
  public totalRecords: number;
  public lazyLoadingData: any[] =[];
  public render : boolean = false;
  public loading: boolean = false;
  public exportData: any[] =[];
  public selectedCars: any[]=[];
  yearFilter: number;
  yearTimeout: any;
  constructor(private apollo: Apollo) {}


  fetch(){
    this.apollo.watchQuery<any>({
      query: Profiles
    })
      .valueChanges
      .subscribe(({data}) => {
        this.data = data.profiles.map(p=>{
		  console.log(p);
          return p;
        });
      });
  }

	getDemoData() {
		this.apollo.watchQuery<any>({
			query: Demos
		})
		.valueChanges
		.subscribe(({data}) => {
			this.cars = [];
			this.carsData =[];
			this.exportData = [];
			this.cars = data.demos.map(d=>{
				return d;
			});
			this.carsData = JSON.parse(JSON.stringify(this.cars));
			this.exportData = JSON.parse(JSON.stringify(this.cars));
			//this.totalRecords = this.lazyLoadingData.length;
			this.render = true;
		});
	}

  ngOnInit() {
	  this.cols = [
            { field: 'id', header: 'Id' },
            { field: '_firstCreatedTimestamp', header: 'Created Date' },
            { field: 'categories', header: 'Categories' },
            { field: 'tagline', header: 'Tagline' }
        ];
		//this.carsData = JSON.parse(JSON.stringify(this.cars));
		this.getDemoData();
		setTimeout(() => {
			this.carsData = JSON.parse(JSON.stringify(this.cars));
			this.loading = true;
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

  onYearChange(event, dt) {
        if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
        }

        this.yearTimeout = setTimeout(() => {
            dt.filter(event.value, 'year', 'gt');
        }, 250);
    }
	
	loadCarsLazy(event: LazyLoadEvent) {
		console.log(event);
        this.loading = true;
        this.apollo.watchQuery<any>({
			query: Demos
		})
		.valueChanges
		.subscribe(({data}) => {
			this.dataSource = [];
			this.dataSource = data.demos.map(d=>{
				return d;
			});
			setTimeout(() => {
            if (this.dataSource) {
                this.lazyLoadingData = this.dataSource.slice(event.first, (event.first + event.rows));
                this.loading = false;
            }
        }, 1000);
		});
        
    }
}
