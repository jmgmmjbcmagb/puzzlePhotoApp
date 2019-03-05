import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPhotosService {

  constructor() { }
  public initPhoto() {
  let allImgs = this.getPhotos()
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let ramdomImg = getRandomInt(0, allImgs.length)
  let img = allImgs[ramdomImg].img
  return img;
  }
  public getPhotos() {
    let imgs = [
      {img: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg"},
      {img: "https://vignette.wikia.nocookie.net/regularshow/images/e/e9/Shimmer-and-shine-2-2-1x1.jpg/revision/latest?cb=20180217163036&path-prefix=es"},
      {img: "http://s3.amazonaws.com/nickelodeonparents.com-production/wp-content/uploads/2016/03/shimmerAndShine-pinThePonytail1x1.jpg"},
      {img: "https://stmed.net/sites/default/files/peppa-pig-wallpapers-26290-4958877.jpg"},
      {img: "https://theshirleyjourney.com/wp-content/uploads/2015/07/US-Peppa-Sandcastles.jpg"},
      {img: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas-para-ninos-cine-infantil/trailer-pelicula-pocoyo/138090472-1-esl-ES/Pocoyo-en-cines-Trailer-de-la-pelicula.jpg"},
      {img: "https://pbs.twimg.com/media/DBePz0FUAAAAas-.jpg"}
    ]
    return imgs;
  }
}
