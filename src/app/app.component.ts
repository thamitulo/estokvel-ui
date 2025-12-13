import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BackendService } from './services/backend.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'estokvel-ui';

  data: any;

  constructor() {}

}
