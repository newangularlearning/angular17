import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoLinksComponent } from './demo-links/demo-links.component';



@NgModule({
  declarations: [
    DemoLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DemoLinksComponent]

})
export class LinksModule { }
