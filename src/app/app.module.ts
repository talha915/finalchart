import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { SplinechartComponent } from './splinechart/splinechart.component';
import { AreachartComponent } from './areachart/areachart.component';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    SplinechartComponent,
    AreachartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
