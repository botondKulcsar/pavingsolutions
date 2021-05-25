import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = false;
  public isShown = false;

  @HostListener('window:scroll') onWindowScroll() {
    const yCoodrdinate = this.viewportScroller.getScrollPosition()[1];
    // console.log(yCoodrdinate);
    this.isShown = yCoodrdinate > 135;
  }

  constructor(private viewportScroller: ViewportScroller) { }
  

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

}
