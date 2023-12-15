import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>('https://open-weather13.p.rapidapi.com/city/'+cityName, {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
      .set('X-RapidAPI-Key', 'ef7f84faf6msh9dc1fc985a9d272p11ad6ejsna3adec354f20'),
    })

  }
}
