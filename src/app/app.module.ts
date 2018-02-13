import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GraphQLModule } from './apollo.config';
import { RouterModule, Routes } from '@angular/router';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { GraphsComponent } from './graphs/graphs.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { EditorComponent } from './editor/editor.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { LinechartComponent } from './charts/linechart/linechart.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { DiscreteBarComponent } from './charts/discrete-bar/discrete-bar.component';
import { PieComponent } from './charts/pie/pie.component';
import { MultiBarComponent } from './charts/multi-bar/multi-bar.component';
import { DonutComponent } from './charts/donut/donut.component';
import { MultiBarHorizontalChartComponent } from './charts/multi-bar-horizontal-chart/multi-bar-horizontal-chart.component';
import { BoxPlotChartComponent } from './charts/box-plot-chart/box-plot-chart.component';
import { ForceDirectedGraphComponent } from './graphs/force-directed-graph/force-directed-graph.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tables', component: TableComponent },
  { path: 'forms', component: FormComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'collaborators', component: CollaboratorsComponent },
  { path: 'reactiveforms', component: ReactiveFormComponent },
  { path: '**', component: DashboardComponent }//PageNotFoundComponent }
];
@NgModule({
  declarations: [
    RootComponent,
    DashboardComponent,
    ChartsComponent,
    GraphsComponent,
    TableComponent,
    FormComponent,
    AppComponent,
    HomeComponent,
    EditorComponent,
    LinechartComponent,
    CollaboratorsComponent,
    DiscreteBarComponent,
    PieComponent,
    MultiBarComponent,
    DonutComponent,
    MultiBarHorizontalChartComponent,
    BoxPlotChartComponent,
    ForceDirectedGraphComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    NvD3Module,
    GraphQLModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FormsModule,
    TableModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
