import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, 
    CommonModule,
    FormsModule,
    SwiperModule
  ]
})
export class HomePage implements OnInit, AfterContentChecked {

  bannerConfig: SwiperOptions;
  banners: any[] = [];

  constructor() { }

  ngOnInit() {
    this.banners = [
      {banner: 'assets/imgs/1.jpg'},
      {banner: 'assets/imgs/2.jpg'},
      {banner: 'assets/imgs/3.jpg'},
      {banner: 'assets/imgs/4.jpg'},
    ];
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
    };
  }

}
