import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselImgUrls: string[] = [
    '../../../assets/carousel/3.jpg',
    '../../../assets/carousel/4.jpg',
    '../../../assets/carousel/6.jpg',
    '../../../assets/carousel/7.jpg',
    '../../../assets/carousel/8.jpg',
    '../../../assets/carousel/9.jpg',
  ]

  services: any[] = [
    {
      title: 'Paving',
      description: 'Fully professional fitting service.',
      imgUrl : '../../../assets/services/paving.jpeg'
    },
    {
      title: 'Tools and Machinery Hire',
      description: 'We offer you a wide range of rental equipment.',
      imgUrl : '../../../assets/services/tools.jpeg'
    },
    {
      title: 'Maintenance services',
      description: 'A very important maintaining quality is the rendering of the look.',
      imgUrl : '../../../assets/services/maintenance3.jpeg'
    },
    {
      title: 'Counseling',
      description: 'Advice on chooising products,  designing-viewing 3D layout and calculating material requirements.',
      imgUrl : '../../../assets/services/counseling.jpeg'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
