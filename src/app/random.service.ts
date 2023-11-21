import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(private http:HttpClient) { }

  getRandomQuote(){

    return this.http.get('http://localhost:8080/rs', {responseType:'text'});
  }
}
