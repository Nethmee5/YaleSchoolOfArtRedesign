import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-advertisement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advertisement.component.html',
  styleUrl: './advertisement.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ]),
    ]),
    trigger('buttonBounce', [
      transition(':enter', [
        style({ transform: 'scale(0.8)' }),
        animate('300ms ease-out', style({ transform: 'scale(1.1)' })),
        animate('200ms ease-out', style({ transform: 'scale(1)' }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
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
