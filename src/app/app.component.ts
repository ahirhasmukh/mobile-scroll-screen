import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
    autoplay: 100,
  };
}
