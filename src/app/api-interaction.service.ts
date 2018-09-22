import { Injectable } from '@angular/core';
import { Slide } from './slide';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpClientModule, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json; charset=utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiInteractionService {

  getSlides (): Observable<Slide[]> {
    return this.http.get<Slide[]>(this.apiUrl, httpOptions).pipe(
    )
  }

  addSlide (slide: Slide): Observable<Slide> {
    return this.http.post<Slide>(this.apiUrl, slide, httpOptions).pipe(
      //console.log(`added slide w/ id=${slide.id}`),
      //catchError(error => console.log(error))
    );
  }

  removeSlide (slide: Slide | number): Observable<Slide> {
      const id = typeof slide === 'number' ? slide : slide.id;
      const url = `${this.apiUrl}/${id}`;

      return this.http.delete<Slide>(url, httpOptions).pipe(
        //console.log(`deleted slide id=${id}`),
        //catchError(console.error(error))
      );
  }

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'http://localhost:3000/api/slides';
}
