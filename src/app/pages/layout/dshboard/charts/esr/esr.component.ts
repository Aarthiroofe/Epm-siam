import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent,
  ApexFill,
  ApexDataLabels,
  ApexResponsive
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill:ApexFill,
  dataLabels:ApexDataLabels
  // responsive: ApexResponsive[];
};

@Component({
  selector: 'app-esr',
  templateUrl: './esr.component.html',
  styleUrls: ['./esr.component.scss']
})
export class ESrComponent implements OnInit {


  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() { 

    this.chartOptions = {
      series: [15],
      chart: {
        height: 140,
        width:140,
        type: "radialBar"
      },
      fill:{
        type:'gradient',
          colors:["#F0DA63"]
      },
      plotOptions: {
        radialBar: {
          startAngle:0,
          endAngle:360,
          hollow:{
background:"#F0DA63",margin:5,size:"70%"
          },
         
          track:{
            background:"transparent",strokeWidth:"10%",margin:6,
          },
          dataLabels: {
            name: {
              fontSize: "100%",
              color:"white",
            },
            value: {
              fontSize: "100%",
              show: true,
              offsetY:2,
              color:"white"
            },
          }
        }
      },
      labels: ["Relived"]
    };
  }

  ngOnInit(): void {
  }

}
