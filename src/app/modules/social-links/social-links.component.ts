import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface SocialLinkInput {
  socialLinks: SocialLink[];
  avatar: string;
  name: string;
  summary: string;
  location: string;
}

export interface SocialLink {
  url: string;
  label: string;
}

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
  @Input() value?: SocialLinkInput;
}
