import { Component, OnInit } from '@angular/core';
import { MobilePlatformService } from './services/mobile-platform.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'estokvel-ui';

  /** true when running inside a native Android/iOS app */
  get isNative(): boolean {
    return this.platformService.isNative;
  }

  constructor(private platformService: MobilePlatformService) {}

  async ngOnInit(): Promise<void> {
    // Initialize native mobile plugins (StatusBar, SplashScreen, back-button, etc.)
    await this.platformService.initializeApp();
  }
}
