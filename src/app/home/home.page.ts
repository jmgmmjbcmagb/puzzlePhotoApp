import { Component } from '@angular/core';
import { CdkDragDrop, CdkDropList, transferArrayItem, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todo = [
    { value: '1', done: 'done1', img: 'https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-o0iD9LWclsIs/image_part_001.jpg' },
    { value: '2', done: 'done2', img: 'https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-o0iD9LWclsIs/image_part_002.jpg' },
    { value: '3', done: 'done3', img: 'https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-o0iD9LWclsIs/image_part_003.jpg' },
    { value: '4', done: 'done4', img: 'https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-o0iD9LWclsIs/image_part_004.jpg' }
  ];

  done1 = [];
  done2 = [];
  done3 = [];
  done4 = [];

  evenPredicate(drag: CdkDrag, drop: CdkDropList) {
    if (drag.data.done === drop.id) {
      return true
    } else {
      return false
    }
  }

  public reload(): void{
    console.log("console")
    this.todo = [
      { value: '1', done: 'done1', img: 'https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-o0iD9LWclsIs/image_part_001.jpg' },
      { value: '2', done: 'done2', img: 'https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-o0iD9LWclsIs/image_part_002.jpg' },
      { value: '3', done: 'done3', img: 'https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-o0iD9LWclsIs/image_part_003.jpg' },
      { value: '4', done: 'done4', img: 'https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-o0iD9LWclsIs/image_part_004.jpg' }
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
  }
}

