import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
