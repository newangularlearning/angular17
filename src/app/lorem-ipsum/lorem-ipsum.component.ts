import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lorem-ipsum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lorem-ipsum.component.html',
  styleUrl: './lorem-ipsum.component.css',
})
export class LoremIpsumComponent {
  array: any[] = new Array();

  constructor() {
    this.array.length = 30;
    this.array.fill(1)
  }

}
