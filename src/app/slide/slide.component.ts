import { Component, OnInit, Input } from '@angular/core';
import { Slide } from '../slide';
import { Location } from '@angular/common';
import { ApiInteractionService } from '../api-interaction.service';
//import * as $ from 'jquery';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() slide: Slide;

  constructor(private apiService: ApiInteractionService, private location: Location) { }

  ngOnInit() {
  }
  onRemove(slide: Slide): void {
    this.apiService.removeSlide(slide).subscribe()
    location.reload()
  }

}
