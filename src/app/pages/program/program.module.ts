import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './program.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProgramComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ProgramComponent }]),
    CommonModule,
    SharedModule
  ]
})
export class ProgramModule { }
