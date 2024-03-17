import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  constructor(private weatherService: WeatherService){

  }

  title: string = "WeatherApp";

  cityName: string = "Athens Greece";
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
  }

  onSubmit(){
    this.getWeatherData(this.cityName)
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = <WeatherData>JSON.parse(JSON.stringify(response));
      }
    });
  }
}
