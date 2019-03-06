import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetPhotosService } from '../../services/get-photos.service';

@Component({
  selector: 'selectImg',
  templateUrl: './selectImg.component.html',
  styleUrls: ['./selectImg.component.scss'],
})
export class MyComponentComponent implements OnInit {

  constructor(private GetPhotos: GetPhotosService) {
    this.imgs = GetPhotos.getPhotos();
   }

  @Output() selectedImg: EventEmitter<string> = new EventEmitter();

  img = '';
  imgs = [];
  selectImg: string;

  slideOpts = {
    effect: 'flip',
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    zoom: false,
  };

  ngOnInit() {}

  changeImg(img) {
    this.selectedImg.emit ( img );
  }

}
