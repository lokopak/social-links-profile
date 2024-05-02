import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

  constructor(private _sanitizer: DomSanitizer) {}

  getAvatarSrc(): SafeUrl | null {
    return this.value ? this._sanitizer.bypassSecurityTrustUrl('assets/images/' + this.value.avatar) : null;
  }
}
