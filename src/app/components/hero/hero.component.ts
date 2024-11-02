import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  showLastEditedInfo = false;

  lastEditedInfo = {
    editorName: 'Lindsey Mancini',
    accessLevel: 'Everybody'
  };
  toggleLastEditedInfo() {
    this.showLastEditedInfo = !this.showLastEditedInfo;
  }
}
