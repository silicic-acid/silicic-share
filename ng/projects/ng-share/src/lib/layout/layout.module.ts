import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FullWidthComponent } from './full-width/full-width.component';

@NgModule({
  declarations: [HeaderComponent, ContainerComponent, FullWidthComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
