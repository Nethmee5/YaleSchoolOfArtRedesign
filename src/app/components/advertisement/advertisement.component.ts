import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advertisement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advertisement.component.html',
  styleUrl: './advertisement.component.css',
})

export class AdvertisementComponent {
  showLastEditedInfo = false;

  lastEditedInfo = {
    editorName: 'Lindsey Mancini',
    accessLevel: 'Everybody'
  };
  toggleLastEditedInfo() {
    this.showLastEditedInfo = !this.showLastEditedInfo;
  }
}
