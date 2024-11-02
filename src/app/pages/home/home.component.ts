import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProgramsComponent } from '../../components/programs/programs.component';
import { AdvertisementComponent } from '../../components/advertisement/advertisement.component';
import { BulletinbordComponent } from '../../components/bulletinbord/bulletinbord.component';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { CalandnewslettersComponent } from '../../components/calandnewsletters/calandnewsletters.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, ProgramsComponent, AdvertisementComponent, CalendarComponent, BulletinbordComponent,CalandnewslettersComponent, CtaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {

}
