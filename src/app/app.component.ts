import { Component, OnInit } from '@angular/core';

import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(){
    this.photoService.listFromUser('flavio').subscribe((photos) => {
      this.photos = photos;
    });
  }

}
