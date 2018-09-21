import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { NewSlideComponent } from './new-slide/new-slide.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: SliderComponent},
  { path: 'new-slide', component: NewSlideComponent }
];

@NgModule({
  //imports: [ RouterModule.forRoot(routes), HttpClientModule ],
  imports: [ RouterModule.forRoot(routes), HttpClientModule ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
