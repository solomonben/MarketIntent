import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';




@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StartPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  barchart:any 
  percentbarchart:any 
  piechart:any
  constructor() { 
  }

  async showBarchart(){
    /*
      Bar Chart 
      - Data
      - Labels 
    */
    const prices1 = [13, 14.75, 6, 4.75, 3.75, 4, 2.75, 1.25] // Data - counts/prices of the your data 
    const prices2 = [14.74, 15.25, 8, 5.5, 5.25, 4.75, 3, 1.5] // Data - Define secondary data if you want comparison( 2bars in 1 label )
    const labels = ['Whiskey', 'Vodka', 'Tequila', 'Brandy & Cognac', 'Cocktails/RTD', 'Cordials', 'Rum', 'Gin'] // (Labels)
    const data = {
      labels: labels,
      datasets: [ // Define 2 datasets for compasion
        {
        label: 'Year 2022',
        data: prices1,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
        },
        {
          label: 'Year 2023',
          data: prices2,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1
          }
      ]
      };
      this.barchart = new Chart('barChart', { // name is just the ID to identify in the html file
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          layout: {
            padding: 10
        }
        },
      });
  }
  
  async showPieChart(){
    /*
      Pie Chart

    */
    const data = {
      datasets: [{
          data: [13, 31, 26, 30]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ['Cocktails/RTD', 'Tequila/Mezcal', 'All Whiskey', 'All Other Spirits']
    };
    this.piechart = new Chart('pieChart', {
      type: 'doughnut',
      data: data,
      options: {
        layout: {
            padding: 10
        }
      }
    })
  }

  async showPercentageChart(){
    
    let data = {
      datasets: [
        {label: "Cocktails/RTD",  data:[41.15, 36.73, 22.12]},
        {label: "Vodka",  data:[6.16, 10.41, 55.99, 27.44]},
        {label: "Whiskey",  data:[6.54, 17.53, 38.43, 37.5]},
        {label: "Cordials",  data:[16.41, 52.05, 9.74, 21.79]},
        {label: "Brandy & Cognac",  data:[10.1, 13.86, 42.97, 33.07]},
        {label: "Tequila",  data:[4.5, 24.21, 54.63, 16.67]},
        {label: "Gin",  data:[25, 12.07, 18.10, 44.83]},
        {label: "Rum",  data:[7.25, 67.03, 8.7, 17.03]},
      ],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ['Value', 'Premium', 'Super Premium', 'High End Premium']
    };
    this.piechart = new Chart('percentageChart', {
      type: 'pie',
      data: data,
      options: {
        layout: {
            padding: 10
        }
      }
    })
  }

  ngOnInit() {
    this.showPercentageChart()
    this.showBarchart()
    this.showPieChart()
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(this.folder)
  }

}
