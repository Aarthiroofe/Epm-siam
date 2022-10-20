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
  colors: string[]
  fill: ApexFill
  dataLabels: ApexDataLabels
  tooltip: ApexTooltip;
  legend: ApexLegend;
};

@Component({
  selector: 'app-logincredentials',
  templateUrl: './logincredentials.component.html',
  styleUrls: ['./logincredentials.component.scss']
})
export class LogincredentialsComponent implements OnInit {

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [60, 18, 22],
      chart: {
        width: 380,
        type: "donut",

      },
      labels: ["Access ", "Pending ", "Without access",],
      fill: {
        type: 'solid',
        colors: ['#F3E183', '#FF716E', '#7D68FB']
      },
      legend: {
        position: "bottom",
        markers: {
          fillColors: ['#F3E183', '#FF716E', '#7D68FB']
        },

        labels: {
          useSeriesColors: false
        },
        formatter: function (val: any, opts: any) {
          console.log(opts);
          return "<p style='margin-top:24px'>" + val + "</P>" + opts.w.globals.series[opts.seriesIndex] + '%'
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
