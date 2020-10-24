import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StemSocialsPageRoutingModule } from './stem-socials-routing.module';

import { StemSocialsPage } from './stem-socials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StemSocialsPageRoutingModule
  ],
  declarations: [StemSocialsPage]
})
export class StemSocialsPageModule {}
