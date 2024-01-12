import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BlockNewsComponent } from '../block-news/block-news.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,NavBarComponent,BlockNewsComponent]
})
export class HomePageModule {}
