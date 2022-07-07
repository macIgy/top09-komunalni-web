import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  constructor() { }

  @Input() header!: string;
  @Input() text!: string;
  @Input() image!: string;
  @Input() reversed: boolean = false;


  ngOnInit(): void {
  }

}
