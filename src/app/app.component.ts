import { Component } from '@angular/core';
import { SocialLinkInput } from './modules/social-links/social-links.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'social-links-profile';

  value: SocialLinkInput = {
    name: 'Jessica Randall',
    summary: 'Front-end developer and avid reader',
    avatar: '/assets/images/avatar-jessica.jpeg',
    location: 'London, United Kingdom',
    socialLinks: [
      {
        url: '#',
        label: 'Github',
      },
      {
        url: '#',
        label: 'Frontend Mentor',
      },
      {
        url: '#',
        label: 'LinkedIn',
      },
      {
        url: '#',
        label: 'Twitter',
      },
      {
        url: '#',
        label: 'Instagram',
      },
    ],
  };
}
