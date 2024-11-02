import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  date: string;
  title: string;
  description: string;
  location: string;
  time: string;
  borderColor: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  events: Event[] = [
    {
      date: '04 Nov',
      title: 'Do Photos Lie? Visual Literacy in the Age of AI',
      description: 'Hosted by Haas Arts Library...',
      location: 'Online',
      time: '11:00 AM - 11:30 AM EST',
      borderColor: 'border-blue-400',
    },
    {
      date: '04 Nov',
      title: "Celebrating Jane Davis Doggett, MFA '56",
      description: 'Hosted by Haas Arts Library...',
      location: 'Haas Arts Library',
      time: '4:00 PM - 6:00 PM EST',
      borderColor: 'border-green-400',
    },
    {
      date: '04 Nov',
      title: 'Mondays at Beinecke...',
      description: 'Hosted by Beinecke Library...',
      location: 'Online',
      time: '4:00 PM - 5:00 PM EST',
      borderColor: 'border-yellow-400',
    },
    {
      date: '04 Nov',
      title: 'Visiting Artist Lecture...',
      description: 'Lecture with Robert Andy Coombs...',
      location: '36 Edgewood Ave',
      time: '5:00 PM - 6:30 PM EST',
      borderColor: 'border-black',
    },
    {
      date: '04 Nov',
      title: 'Figure Drawing Workshop',
      description: 'Join the Painting/Printmaking...',
      location: '1156 Chapel Street, Room G01',
      time: '6:00 PM - 8:00 PM EST',
      borderColor: 'border-yellow-400',
    },
  ];

  currentPage: number = 0;
  eventsPerPage: number = 2;


  currentStyleClass: string = 'bg-indigo-50 text-indigo-800'; 
  dateTextClass: string = 'text-indigo-600';
  timeTextClass: string = 'text-indigo-500';
  titleTextClass: string = 'text-indigo-900';
  locationTextClass: string = 'text-indigo-700';
  descriptionTextClass: string = 'text-indigo-600';

  get currentEvents(): Event[] {
    const start = this.currentPage * this.eventsPerPage;
    return this.events.slice(start, start + this.eventsPerPage);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.eventsPerPage < this.events.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
