import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-landings',
  templateUrl: './landings.component.html',
  styleUrls: ['./landings.component.scss']
})
export class LandingsComponent implements OnInit , AfterViewInit  {

  constructor() { }

  config: SwiperOptions = {
    breakpoints:{
      '1024': {
        slidesPerView: 1,
        spaceBetween: 0
      }

    },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.next',
      prevEl: '.previous'
    },
    loop:true,
    spaceBetween: 10
  };

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    feather.replace();
  }
}
