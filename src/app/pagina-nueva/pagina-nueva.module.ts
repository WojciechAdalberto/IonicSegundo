import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaginaNuevaPage } from './pagina-nueva.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaNuevaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaginaNuevaPage]
})
export class PaginaNuevaPageModule {}
