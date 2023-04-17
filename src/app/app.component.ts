import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Start', url: '/start', icon: 'home' },
    { title: 'Market Share', url: '/folder/market-share', icon: 'pie-chart' },
    { title: 'Competitors', url: '/folder/competitors', icon: 'people' },
    { title: 'Demographics', url: '/folder/demographics', icon: 'podium' },
    { title: 'Social Behavior', url: '/folder/social-behaviors', icon: 'people-circle' },
    { title: 'News', url: '/folder/news', icon: 'newspaper' },
    { title: 'Place', url: '/folder/place', icon: 'location' },
    { title: 'Influencer', url: '/folder/influencer', icon: 'heart' },
    { title: 'Events', url: '/folder/events', icon: 'gift' },
    { title: 'Recommendation', url: '/folder/recommendation', icon: 'ice-cream' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public user = "Stash Harrison"
  constructor() {}
}
