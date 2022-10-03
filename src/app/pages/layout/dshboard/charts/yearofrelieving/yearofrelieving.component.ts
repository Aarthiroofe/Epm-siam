import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexFill,
  ApexResponsive,
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  stroke?: ApexStroke;
  dataLabels?: ApexDataLabels;
  yaxis?: ApexYAxis;
  title?: ApexTitleSubtitle;
  labels?: string[];
  legend?: ApexLegend;
  subtitle?: ApexTitleSubtitle;
  fill?:ApexFill;
  responsive: ApexResponsive[];

};

@Component({
  selector: 'app-yearofrelieving',
  templateUrl: './yearofrelieving.component.html',
  styleUrls: ['./yearofrelieving.component.scss']
})
export class YearofrelievingComponent implements OnInit {

  @ViewChild("chart")
    chart!: ChartComponent;
  
    public chartOptions: Partial<ChartOptions>;
  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "YEAR OF RELIEVING",
          data: [30,37,28,30,42,53,50],color:'#F2946b'

        },
      ],
      chart: {
        type: "area",
        // height: 300,
        // width: 450,
        toolbar:{
          show:false
        },
        zoom: {
          enabled: false
        },
        
      },
      dataLabels: {
        enabled: false
      },

      stroke: {
        curve: "smooth",
      colors :["red"],
      },

      title: {
        text: "YEAR OF JOINING",
        align: "left"
      },
      subtitle: {
        text: "New joiners",
        align: "left"
      },
      labels: ["2016","2017","2018","2019","2020","2021","2022"],
      xaxis: {
        type: "datetime",

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
      legend: {
        horizontalAlign: "left"
      },
     
    };
  }

  ngOnInit(): void {
  }

}
