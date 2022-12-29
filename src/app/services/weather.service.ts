import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private requestLinkOne: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private requestLinkTwo: string = '&appid=211061300ac2acb85b19da2ea22ad805&units=metric';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.requestLinkOne+cityName+this.requestLinkTwo);
  }

}
