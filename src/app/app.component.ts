import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksModule } from './links/links.module';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LinksModule, LoremIpsumComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
}
