import { Injectable, ErrorHandler } from '@angular/core';
import { Slide } from './slide';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
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
      tap(
        data => console.log(data),
        error => console.log(error)
      )
    )
  }

  addSlide (slide: Slide): Observable<Slide> {
    return this.http.post<Slide>(this.apiUrl, slide, httpOptions)
    .pipe(
      tap(
        data => console.log(data),
        error => console.log(error)
      )
    )
  }

  removeSlide (slide: Slide | number): Observable<Slide> {
      const id = typeof slide === 'number' ? slide : slide.id;
      const url = `${this.apiUrl}/${id}`;

      return this.http.delete<Slide>(url, httpOptions).pipe(
        tap(
          data => console.log(data),
          error => console.log(error)
        )
      );
  }

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'http://localhost:3000/api/slides';
}
