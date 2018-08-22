import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('1s ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})

export class AppComponent {
  
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    direction: 'vertical',
    slidesPerView: 1,
    speed: 1000,
    nested: true,
    effect: 'slide',
    mousewheelControl: true,
    //  autoplay: 100,
  };
  
  constructor() {}
}
