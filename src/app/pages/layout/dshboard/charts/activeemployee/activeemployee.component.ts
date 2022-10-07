import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexFill,
  ApexDataLabels,
  ApexTooltip,
  ApexLegend
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors:string[]
  fill:ApexFill
  dataLabels:ApexDataLabels
  tooltip:ApexTooltip;
  legend:ApexLegend;
};

@Component({
  selector: 'app-activeemployee',
  templateUrl: './activeemployee.component.html',
  styleUrls: ['./activeemployee.component.scss']
})
export class ActiveemployeeComponent implements OnInit {

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [40, 26,24],
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["PDS ", "CST ", "LABS ",],
      fill:{
        type:'gradient',
        colors:['#FF716E','#7D68FB','#F3E183']
      },
      legend: {
        position: "bottom",
        markers:{
          fillColors:['#FF716E','#7D68FB','#F3E183'],
        },
        
       labels:{
        useSeriesColors:false
     },
       formatter : function(val:any,opts:any){
      //  console.log(opts);
        return val+ opts.w.globals.series[opts.seriesIndex]+'%'
       }
       
      },
      tooltip: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 837,
          options: {
            chart: {
              width: 300
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
