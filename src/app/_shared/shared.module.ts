import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../_material/material.module';




@NgModule({
  declarations: [
  ],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class SharedModule { }
