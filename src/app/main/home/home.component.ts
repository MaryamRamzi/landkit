import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import {SwiperOptions} from "swiper";

// import * as AOS from "aos";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterViewInit {

  constructor() { }
  config: SwiperOptions = {
    breakpoints:{
      // '576': {
      //   slidesPerView: 1,
      //   spaceBetween: 15
      // },
      // '768': {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // '992': {
      //   slidesPerView: 4,
      //   spaceBetween: 10
      // },
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

  show:boolean=true;

  ngOnInit(): void {}

  ngAfterViewInit() {
    feather.replace();
  }
  chImage(){
    this.show = !this.show
  }
}
