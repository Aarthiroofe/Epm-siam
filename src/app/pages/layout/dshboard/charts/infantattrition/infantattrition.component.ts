import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexDataLabels,
  ApexResponsive,
  ApexFill,
  ApexYAxis,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  dataLabels:ApexDataLabels;
  responsive: ApexResponsive[];
  fill:ApexFill;
  colors:string[]
  labels?: string[];
  yaxis?: ApexYAxis;
  legend:ApexLegend;
};
@Component({
  selector: 'app-infantattrition',
  templateUrl: './infantattrition.component.html',
  styleUrls: ['./infantattrition.component.scss']
})
export class InfantattritionComponent implements OnInit {

  @ViewChild("chart")chart!: ChartComponent;
  
  public chartOptions: Partial<ChartOptions>;
  constructor() { 

    this.chartOptions ={

      series: [{
        data: [400, 430, 448, 470, 540,]  
      }],
      
      colors :['#4C5DF8','#1BA9EA','#FD827F','#FFBF73','#7C4ACD'],
     
          chart: {
          type: 'bar',
          toolbar:{
            show:false
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 1,
            horizontal: true,
            barHeight: '10%',
            distributed:true
          }
        },
        legend:{
           show:false
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ["2022","2021","2020","2019","2018","2017","2016",
          ],
        },
    }
  }

  ngOnInit(): void {
  }

}
