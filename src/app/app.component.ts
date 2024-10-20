import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialLinksProfileComponent } from './components/social-links-profile/social-links-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SocialLinksProfileComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'social-links-profile';
}
