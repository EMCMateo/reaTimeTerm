import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
ThermometerComponent
import { HomePageRoutingModule } from './home-routing.module';
import { ThermometerComponent } from '../thermometer/thermometer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ThermometerComponent]
})
export class HomePageModule {}
