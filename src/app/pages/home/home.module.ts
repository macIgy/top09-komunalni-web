import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    PhotoGalleryModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ]
})
export class HomeModule { }
