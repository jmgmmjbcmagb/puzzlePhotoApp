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
      {img: 'https://vignette.wikia.nocookie.net/regularshow/images/e/e9/' +
      'Shimmer-and-shine-2-2-1x1.jpg/revision/latest?cb=20180217163036&path-prefix=es'},
      {img: 'http://s3.amazonaws.com/nickelodeonparents.com-production/wp-content/uploads/2016/03/shimmerAndShine-pinThePonytail1x1.jpg'},
      {img: 'https://stmed.net/sites/default/files/peppa-pig-wallpapers-26290-4958877.jpg'},
      {img: 'https://theshirleyjourney.com/wp-content/uploads/2015/07/US-Peppa-Sandcastles.jpg'},
      {img: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/' +
      'peliculas-para-ninos-cine-infantil/trailer-pelicula-pocoyo/138090472-1-esl-ES/Pocoyo-en-cines-Trailer-de-la-pelicula.jpg'},
      {img: 'https://pbs.twimg.com/media/DBePz0FUAAAAas-.jpg'},
      {img: 'https://e497.ecdn.cz/img/1024x1024/cen89tdw/21755.jpg'},
      {img: 'https://www.sweet-tops.co.uk/wp-content/uploads/2017/08/Peppa-Pig-Round-e1505493559648.png'},
      {img: 'https://www.britishcornershop.co.uk/img/large/GARD000140.jpg'},
      {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-vlXUvHnD0JevbLsacEP2HQgWaBR7XR-RM5Z-MY61pggsmaw'},
      {img: 'https://www.britishcornershop.co.uk/img/large/GARD000140.jpg'}
    ];
    return imgs;
  }
}
