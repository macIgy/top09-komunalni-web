import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './program/program.component';
import { GuyComponent } from './guy/guy.component';



@NgModule({
  declarations: [ProgramComponent, GuyComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgramComponent, GuyComponent]
})
export class SharedModule { }
