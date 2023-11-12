import { Component, signal } from '@angular/core';

@Component({
  selector: 'demo-links',
  templateUrl: './demo-links.component.html',
  styleUrl: './demo-links.component.css'
})
export class DemoLinksComponent {
  linksVisible = signal<boolean>(true);
}
