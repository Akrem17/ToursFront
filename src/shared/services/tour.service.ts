import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient) { }

  getTours(){
    //call the api 
  }
}