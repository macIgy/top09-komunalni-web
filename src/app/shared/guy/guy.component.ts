import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guy',
  templateUrl: './guy.component.html',
  styleUrls: ['./guy.component.scss']
})
export class GuyComponent implements OnInit {

  @Input() name: string = "";
  @Input() undername: string = "";
  @Input() job: string = "";
  @Input() pic: string = "";
  @Input() text: string = "";

  seewholetext = false;
  constructor() { }

  ngOnInit(): void {
  }

  wholetext() {
    this.seewholetext = !this.seewholetext;
  }

}
