import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDropList, transferArrayItem, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { AlertController } from '@ionic/angular';
import { GetPhotosService } from '../../services/get-photos.service'

@Component({
  selector: 'app-nine-pieces',
  templateUrl: './nine-pieces.page.html',
  styleUrls: ['./nine-pieces.page.scss'],
})
export class NinePiecesPage implements OnInit {
  todo = [];
  done1 = [];
  done2 = [];
  done3 = [];
  done4 = [];
  done5 = [];
  done6 = [];
  done7 = [];
  done8 = [];
  done9 = [];

  imgs = []

  img: string = ''


  ngOnInit() {
  }

  constructor(public alertController: AlertController, private GetPhotos: GetPhotosService) {
    this.todo = [
      { value: '1', done: 'done1' },
      { value: '2', done: 'done2' },
      { value: '3', done: 'done3' },
      { value: '4', done: 'done4' },
      { value: '5', done: 'done5' },
      { value: '6', done: 'done6' },
      { value: '7', done: 'done7' },
      { value: '8', done: 'done8' },
      { value: '9', done: 'done9' }
    ];
    this.todo = this.shuffle(this.todo);
    this.imgs = GetPhotos.getPhotos();
    this.img = GetPhotos.initPhoto();
   }

  private shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

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



  changeImg(img) {
    this.reload();
    this.img = img;
  }



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
      { value: '4', done: 'done4' },
      { value: '5', done: 'done5' },
      { value: '6', done: 'done6' },
      { value: '7', done: 'done7' },
      { value: '8', done: 'done8' },
      { value: '9', done: 'done9' }
    ];
    this.todo = this.shuffle(this.todo);
    this.done1 = [];
    this.done2 = [];
    this.done3 = [];
    this.done4 = [];
    this.done5 = [];
    this.done6 = [];
    this.done7 = [];
    this.done8 = [];
    this.done9 = [];
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



