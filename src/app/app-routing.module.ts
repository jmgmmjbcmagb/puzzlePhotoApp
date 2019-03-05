import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'fourPieces', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'fourPieces', loadChildren: './pages/four-pieces/four-pieces.module#FourPiecesPageModule' },
  { path: 'ninePieces', loadChildren: './pages/nine-pieces/nine-pieces.module#NinePiecesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
