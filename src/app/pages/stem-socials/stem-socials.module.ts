import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StemSocialsPageRoutingModule } from './stem-socials-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { StemSocialsPage } from './stem-socials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    StemSocialsPageRoutingModule
  ],
  declarations: [StemSocialsPage]
})
export class StemSocialsPageModule {}
