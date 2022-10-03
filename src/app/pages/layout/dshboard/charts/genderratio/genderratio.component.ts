import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  // ApexResponsive,
  ApexChart,
  ApexFill,
  ApexStates,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  // responsive: ApexResponsive[];
  labels: any;
  fill : ApexFill;
  colors:string[]
  states:ApexStates
  legend:ApexLegend
  plotOptions:ApexPlotOptions
  responsive: ApexResponsive []
  tooltip:ApexTooltip
};
@Component({
  selector: 'app-genderratio',
  templateUrl: './genderratio.component.html',
  styleUrls: ['./genderratio.component.scss']
})
export class GenderratioComponent implements OnInit {

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() { 
    this.chartOptions = {
      series: [ 65,35],

      chart: {
        type: "donut",
        height:270,
      },
      states:{
         hover:{
          filter:{
            type:"none"
          }
         }
      },
      labels: ["Female", "Male"],
      colors:['#FF716E','#FCD6D5'],
      legend:{
        show:false,
     },
     plotOptions: {
      pie: {
        expandOnClick: false
      },
    },
    tooltip:{
      custom: (val)=> {
        if(val.seriesIndex==1){
          return '<div class="arrow_box"  style="padding:4px;color:black;background:white";>' +
          "<img src='../../../../../assets/images/toolboy.png'>" +'<span>'+ val.w.globals.series[val.seriesIndex]+"%"+ '</span>' +
          '</div>'
        }
        else{
          return '<div class="arrow_box" style="padding:4px;color:black;background:white">' +
          "<img src='../../../../../assets/images/toolgirl.png'>" + '<span>'+ val.w.globals.series[val.seriesIndex]+"%"+ '</span>' +
          '</div>'
        }
      },
    },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 240
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
