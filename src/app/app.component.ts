import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocialLinkInput, SocialLinksComponent } from './modules/social-links/social-links.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SocialLinksComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'social-links-profile';

  value: SocialLinkInput = {
    name: 'Jessica Randall',
    summary: 'Front-end developer and avid reader',
    avatar: 'avatar-jessica.jpeg',
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
