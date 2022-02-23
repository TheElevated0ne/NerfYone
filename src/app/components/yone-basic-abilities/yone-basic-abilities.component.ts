import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yone-basic-abilities',
  templateUrl: './yone-basic-abilities.component.html',
  styleUrls: ['./yone-basic-abilities.component.css']
})
export class YoneBasicAbilitiesComponent implements OnInit {

  @Input() type: string = ""

  description: string = ""

  constructor() {
  }

  ngOnInit(): void {
    if (this.type === "P") {
      this.description = "Every second attack he deals magic damage, to prevent you from stacking armor against him. His chances of critical strike are doubled, so with 2 items he acts like very fed ADC."
    }
    if (this.type === "Q") {
      this.description = "Yone stabs forword, dealing tons of damage. On hit, grants a Stack of Retardness. At 2 stacks Yone dash forward to fuck your mother and knocks you up, dealing tons of damage by the way."
    }
    if (this.type === "W") {
      this.description = "Yone is waving his big, mighty sword to impress some girls and deal damage. On hit, he gains shield big and fat as your mother. On more champion hits it gets even fatter!"
    }
    if (this.type === "E") {
      this.description = "Yone unleashes his inner retard, and acts like Zed, reaching your ass in a moment, repeating some mental damage he caused, and going back like nothing ever happened"
    }
    if (this.type === "R") {
      this.description = "Yone goes Hazagi mode, and go in into entire enemy team striking everything along his path, dealing damage as high as his players' ego and knocking up everyone for his mentally ill brother"
    }
  }

}
