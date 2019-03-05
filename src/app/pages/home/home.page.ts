import { Component } from '@angular/core';
import { CdkDragDrop, CdkDropList, transferArrayItem, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public alertController: AlertController) { }



  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Hecho!',
      message: 'Has completado el puzzle',
      buttons: [
        {
          text: '👍',
          handler: () => {
            this.reload();
          }
        }
      ]
    });

    await alert.present();
  }

  img = 'https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg'

  imgs = [
    {img: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg"},
    {img: "https://vignette.wikia.nocookie.net/regularshow/images/e/e9/Shimmer-and-shine-2-2-1x1.jpg/revision/latest?cb=20180217163036&path-prefix=es"},
    {img: "http://s3.amazonaws.com/nickelodeonparents.com-production/wp-content/uploads/2016/03/shimmerAndShine-pinThePonytail1x1.jpg"},
    {img: "https://stmed.net/sites/default/files/peppa-pig-wallpapers-26290-4958877.jpg"},
    {img: "https://theshirleyjourney.com/wp-content/uploads/2015/07/US-Peppa-Sandcastles.jpg"},
    {img: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas-para-ninos-cine-infantil/trailer-pelicula-pocoyo/138090472-1-esl-ES/Pocoyo-en-cines-Trailer-de-la-pelicula.jpg"},
    {img: "https://pbs.twimg.com/media/DBePz0FUAAAAas-.jpg"}
  ]

  changeImg(img) {
    this.reload();
    this.img = img;
  }

  todo = [
    { value: '1', done: 'done1' },
    { value: '2', done: 'done2' },
    { value: '3', done: 'done3' },
    { value: '4', done: 'done4' }
  ];

  done1 = [];
  done2 = [];
  done3 = [];
  done4 = [];

  slideOpts = {
    effect: 'flip',
    spaceBetween: 25,
    slidesPerView: 3
  };

  evenPredicate(drag: CdkDrag, drop: CdkDropList) {
    if (drag.data.done === drop.id) {
      return true
    } else {
      return false
    }
  }

  public reload(): void {
    this.todo = [
      { value: '1', done: 'done1' },
      { value: '2', done: 'done2' },
      { value: '3', done: 'done3' },
      { value: '4', done: 'done4' }
    ];
    this.done1 = [];
    this.done2 = [];
    this.done3 = [];
    this.done4 = [];
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      event.container.disabled = true
    }
    if (event.previousContainer.data.length === 0) {
      this.presentAlertConfirm();
    }
  }
}

