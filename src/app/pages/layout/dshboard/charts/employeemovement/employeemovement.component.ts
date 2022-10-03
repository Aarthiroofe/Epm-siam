import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexResponsive
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  colors:string[];
  
};

@Component({
  selector: 'app-employeemovement',
  templateUrl: './employeemovement.component.html',
  styleUrls: ['./employeemovement.component.scss']
})
export class EmployeemovementComponent implements OnInit {

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Probation",
          data: [45, 52, 38, 24, 33, 26, 21, ]
        },
        {
          name: "Releived",
          data: [35, 41, 62, 42, 13, 18, 29,]
        },
        {
          name: "Confirmed",
          data: [87, 57, 74, 99, 75, 38, 62,]
        }
      ],
      colors:["#F3E183","#FC8181","#7D68FB"],
      chart: {
        height: 350,
        type: "line",
        toolbar:{
          show:false
        },
      },
     
      dataLabels: {
        enabled: false,
          
      },
      stroke: {
        width: 5,
        curve: "smooth",
        // dashArray: [0, 8, 5]
      },
      // title: {
      //   text: "Page Statistics",
      //   align: "left"
      // },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
        position:'right',
        offsetY:5,
        itemMargin: {
          horizontal: 0,
          vertical: 8
      },
        
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
        ]
      },
     
      grid: {
        borderColor: "#f1f1f1"
      },
      yaxis: {
        opposite: false,
        min:0,
        max:100,
        tickAmount:5,
        labels:{
          formatter:function(val:any){
            return parseInt(val.toString(), 10).toString()+'%'
          }
        }
      },
   }
  };

  ngOnInit(): void {
  }

}
