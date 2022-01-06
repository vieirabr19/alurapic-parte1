import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';


@NgModule({
  imports: [
    CommonModule,
    PhotoListModule,
    PhotoFormModule
  ]
})
export class PhotosModule { }