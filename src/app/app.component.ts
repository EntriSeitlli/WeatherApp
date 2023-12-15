import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  constructor(private weatherService: WeatherService){

  }

  ngOnInit(): void {
    this.weatherService.getWeatherData('Wellington')
    .subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }

  title = 'WeatherApp';
}
