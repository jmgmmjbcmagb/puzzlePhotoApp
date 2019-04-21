import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPhotosService {

  constructor() { }
  public initPhoto() {
  const allImgs = this.getPhotos();
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const ramdomImg = getRandomInt(0, allImgs.length);
  const img: string = allImgs[ramdomImg].img;
  return img;
  }
  public getPhotos() {
    const imgs = [
      {img: '../../assets/img/1.jpg'},
      {img: '../../assets/img/2.jpg'},
      {img: '../../assets/img/3.jpg'},
      {img: '../../assets/img/4.jpg'},
      {img: '../../assets/img/5.jpg'},
      {img: '../../assets/img/6.jpg'},
      {img: '../../assets/img/7.jpg'},
      {img: '../../assets/img/8.jpg'}
    ];
    return imgs;
  }
}
