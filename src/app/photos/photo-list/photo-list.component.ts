import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter = '';
  debaunce: Subject<string> = new Subject<string>();
  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) {}
    
    ngOnInit(){
      this.userName = this.activatedRoute.snapshot.params['userName'];
      this.photos = this.activatedRoute.snapshot.data['photos'];
      this.debaunce
      .pipe(debounceTime(400))
      .subscribe(filter => this.filter = filter);
    }
    
    ngOnDestroy() {
      this.debaunce.unsubscribe();
    }

    load(){
      this.photoService.listFromUserPagination(this.userName, ++this.currentPage).subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;
      });
    }
}
