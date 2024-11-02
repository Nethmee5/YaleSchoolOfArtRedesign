import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Event {
  title: string;
  description: string;
  
}

@Component({
  selector: 'app-bulletinbord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bulletinbord.component.html',
  styleUrl: './bulletinbord.component.css'
})
export class BulletinbordComponent {
  events: Event[] = [
    { title: 'From our friends at the Yale Center for Environmental Justice', description: 'The Yale Center for Environmental Justice is in the process of planning our fourth annual Global Environmental Justice Conference, with this year focusing on the theme of “Environmental Joy.” The conference aims to explore the ways in which environmental and climate justice and the communities engaged in that work generate joy. Guided by the notion that the ultimate goal of most environmental and climate work is to alleviate suffering and increase wellbeing, Environmental Joy will explore and celebrate the diverse ways that environmental justice achieves this goal.One facet of the conference programming we hope to organize is a juried art show soliciting works from artists around the world on the theme of Environmental Joy to be showcased in an exhibition during the conference. We are currently seeking any interested students or faculty who would be interested in supporting the planning and execution of this call for art. If you’re interested in learning more about the opportunity, please contact Julia Simon at julia.simon@yale.edu.'},
    { title: 'Faculty/Alumni: Post Your Art Apprenticeship/Internship Opportunities for Undergraduates', description: 'The Yale Arts Apprenticeship Program is an initiative that connects Yale undergraduates, particularly those on financial aid, with professional arts practitioners of any discipline. As an option within Yale’s Summer Experience Award (SEA) funding model, the Arts Apprenticeship must fulfill the same basic requirements. Additional details, as well as those specific to the Arts Apprenticeship are included below. Yale faculty, alumni, or other arts practitioners interested in featuring positions through the program should contact Yale’s Creative Careers advisor. Which Opportunities are Eligible? Must be at least 30 hours/week, for at least 8-weeks over the summer months. Those 8-weeks do not have to be continuous if the mentoring Arts Practitioner agrees on a different schedule. The time commitment need not all be in direct contact with the Arts Practitioner. Independent projects, tasks, research, etc. can comprise much of the experience, as long as the Arts Practitioner is checking in regularly with the student to provide oversight and career-based context. The opportunity cannot be with a for-profit organization. The engagement for an Arts Apprenticeship should be directly with an individual Arts Practitioner and not with a company. The only exception to this would be if the company overseeing the apprenticeship were a registered non-profit organization. For more information: https://ocs.yale.edu/channels/arts-apprenticeship/ To post a job, contact: https://ocs.yale.edu/staff-list/#derek-i-webster'},
    { title: 'MAPPING PUBLIC ART IN NEW HAVEN', description: 'Hey everyone! I’ve been mapping public art in New Haven as part of my nonprofit project ArtAround and I’d love to invite you to join me, or just check it out and see what you think.New Haven map.ArtAround homepage >3 Lindsey'},
  ];

  currentPage: number = 0;
  eventsPerPage: number = 2;  // Number of events per page

  // Getter to retrieve events for the current page
  get currentEvents(): Event[] {
    const start = this.currentPage * this.eventsPerPage;
    return this.events.slice(start, start + this.eventsPerPage);
  }

  // Navigate to the next page
  nextPage() {
    if ((this.currentPage + 1) * this.eventsPerPage < this.events.length) {
      this.currentPage++;
    }
  }

  // Navigate to the previous page
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
