import { AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-jovenes',
  templateUrl: './jovenes.component.html',
  styleUrls: ['./jovenes.component.scss'],
})
export class JovenesComponent implements OnInit{
  animationState: string = '';

  data: any;

  options: any;

  ngOnInit(): void {
    this.data = {
      labels: ['Autolesionarse', 'Daño', 'Delgado','Pornografia','Drogas','fotos'],
      datasets: [
        {
          label: 'Series A',
          data: [21, 23, 28, 29, 33, 50],
          backgroundColor: '#42A5F5',
          fill: false,
          tension: 0.4,
          borderColor: 'blue'
        },
      ]
    };

    this.options = {
      plugins: {
        legend: {
            labels: {
                fontColor: 'green'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: 'red'
            },
            grid: {
                color: 'yellow',
                drawBorder: false
            }
        },
        y: {
            ticks: {
                color: 'red'
            },
            grid: {
                color: 'yellow',
                drawBorder: false
            }
        },
    }
    }
  }

}
