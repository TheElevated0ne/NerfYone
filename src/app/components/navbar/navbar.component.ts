import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement!: ElementRef;

  sticky: boolean = false;

  menuPosition: any;

  ngAfterViewInit() {
    this.menuPosition = this.menuElement.nativeElement.offsetTop
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll() {
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.menuPosition){
          this.sticky = true;
      } else {
          this.sticky = false;
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
