import { Component, OnInit } from '@angular/core';
import { Slide } from '../slide';
import { ApiInteractionService } from '../api-interaction.service';
//import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides: Slide[];
  message: String;

  constructor(private apiService: ApiInteractionService) { }

  ngOnInit() {
    this.loadSlides();
    $('.carousel').carousel({interval: 5000});
  }
  loadSlides(): void {
    this.apiService.getSlides()
      .subscribe(slides => {
         this.slides = slides;
         setTimeout(() => {
           this.message = this.slides.length ? '' : 'There is no slides...';
           console.log(this.slides);
         }, 500)
       })
  }
}
