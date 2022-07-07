import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AktualityComponent } from './aktuality.component';
import { RouterModule } from '@angular/router';
import { DynamicScriptLoaderService } from 'src/app/services/dynamicScriptService.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AktualityComponent }]),
  ], providers: [DynamicScriptLoaderService]
})
export class AktualityModule { }
