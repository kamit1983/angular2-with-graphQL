import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GraphQLModule} from './apollo.config';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts'; // this is needed!
import { GraphComponent } from './graph/graph.component';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tables',      component: TableComponent },
  { path: 'forms',      component: FormComponent },
  { path: 'chart1',      component: Chart1Component },
  { path: 'chart2',      component: Chart2Component },
  { path: '**', component: DashboardComponent}//PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   ),
    GraphQLModule,
    RootComponent,
    DashboardComponent,
    Chart1Component,
    Chart2Component,
    TableComponent,
    FormComponent
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
