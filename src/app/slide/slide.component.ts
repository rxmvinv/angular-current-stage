import { Component, OnInit, Input } from '@angular/core';
import { Slide } from '../slide';
import { ApiInteractionService } from '../api-interaction.service';
//import * as $ from 'jquery';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() slide: Slide;

  constructor(private apiService: ApiInteractionService) { }

  ngOnInit() {
  }
  onRemove(slide: Slide): void {
    this.apiService.removeSlide(slide).subscribe()
  }

}
