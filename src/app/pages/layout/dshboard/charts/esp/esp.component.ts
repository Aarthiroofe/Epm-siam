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
  selector: 'app-esp',
  templateUrl: './esp.component.html',
  styleUrls: ['./esp.component.scss']
})
export class ESpComponent implements OnInit {

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() { 

    this.chartOptions = {
      series: [25],
      chart: {
        height: 150,
        type: "radialBar",
        width:140,
      },
      fill:{
        type:'gradient',
          colors:["#6E57FB"]
      },
      plotOptions: {
        radialBar: {
          startAngle:0,
          endAngle:360,
          hollow:{
margin:5,size:"90%",background:"#6E57FB",
          },
          track:{
            background:"transparent",strokeWidth:"25%",margin:0,
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
      labels: ["Probation"]
    };
  }

  ngOnInit(): void {
  }

}
