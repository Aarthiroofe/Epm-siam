import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent,
  ApexFill,
  ApexResponsive
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill:ApexFill;
  // responsive: ApexResponsive[];
};

@Component({
  selector: 'app-esc',
  templateUrl: './esc.component.html',
  styleUrls: ['./esc.component.scss']
})
export class EScComponent implements OnInit {

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() { 
    this.chartOptions = {
      series: [60],
      chart: {
        height: 210,
        type: "radialBar",
        width:170,
      },
      fill:{
        type:'gradient',
          colors:["#FF6965"]
      },
      plotOptions: {
        radialBar: {
          startAngle:0,
          endAngle:360,
          hollow:{
margin:5,size:"90%",background:"#FF6965",
          },
          track:{
            background:"transparent",strokeWidth:"90%",margin:0,
          },
          dataLabels: {
            name: {
              fontSize: "100%",
              color:"white",
            },
            value: {
              fontSize: "100%",
              show: true,
              offsetY:4,
              color:"white"
            },
          }
        }
      },
      labels: ["Confirmed"]
    };
  }

  ngOnInit(): void {
  }

}
