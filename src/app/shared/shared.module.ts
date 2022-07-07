import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './program/program.component';



@NgModule({
  declarations: [ProgramComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgramComponent]
})
export class SharedModule { }
