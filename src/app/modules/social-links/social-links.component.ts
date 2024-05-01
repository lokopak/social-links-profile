import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface SocialLink {
  url: string;
  label: string;
}
const SOCIAL_LINKS: SocialLink[] = [
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
];

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'social-links',
  },
})
export class SocialLinksComponent {
  socialLinks: SocialLink[] = SOCIAL_LINKS;
}
