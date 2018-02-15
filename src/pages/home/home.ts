import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Ion slide instance
  @ViewChild('slider') slider: Slides;

  //current index of slide
  currentIndex: number = 0;

  //ion slide sample data
  slides: Array<Object> = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/imgs/01.jpg'
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/imgs/02.jpg'
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/imgs/03.jpg'
    }
  ];

  constructor(public navCtrl: NavController) { }



  nextSlide() {
    this.slider.slideNext();
  }

  previousSlide() {
    this.slider.slidePrev();
  }

  onSlideChanged() {
    this.currentIndex = this.slider.getActiveIndex();
  }
}
