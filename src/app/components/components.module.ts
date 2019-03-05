import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './selectImg/selectImg.component';

@NgModule({
  declarations: [
    MyComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyComponentComponent
  ]
})
export class ComponentsModule { }
