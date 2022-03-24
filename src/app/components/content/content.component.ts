import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild('fadesIn') fadingObject!: ElementRef<HTMLDivElement>
  faded: boolean = true
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const fadingObjectPosition = this.fadingObject.nativeElement.getBoundingClientRect().top
    const windowScroll = window.pageYOffset
    if(windowScroll >= fadingObjectPosition + 100){
        this.faded = false;
    } else {
        this.faded = true;
        console.log(fadingObjectPosition)
        console.log(windowScroll)
    }
  }

  abilities: string[] = ["P", "Q", "W", "E", "R"]

  user = JSON.parse(localStorage.getItem('user')!)

  constructor(
    public authService: AuthService
  ) {

  }

  ngOnInit(): void {
  }

}
