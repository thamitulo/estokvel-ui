import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthHttpInterceptor } from './auth.interceptor';
import { environment } from './environments/environment';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';
import { FaqComponent } from './shared/faq/faq.component';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from './store/auth/auth.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import { NotificationBellComponent } from './components/notifications/notification-bell/notification-bell';
import { MobileNavComponent } from './shared/mobile-nav/mobile-nav.component';
import { MobileHeaderComponent } from './shared/mobile-header/mobile-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        // Dynamically resolve the redirect URI so it works for:
        //   - Web:     http://localhost:4200
        //   - Android: http://localhost  (Capacitor WebView)
        //   - iOS:     capacitor://localhost
        redirect_uri: window.location.origin,
        audience: environment.auth0.audience,
      },
      // Use refresh tokens + localStorage for native mobile persistence
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiUrl}/*`,
            tokenOptions: {
              authorizationParams: {
                audience: environment.auth0.audience
              }
            }
          }
        ]
      }
    }),
    MaterialModule,
    BrowserAnimationsModule,

    // NgRx store setup
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    // Standalone components
    NotificationBellComponent,
    MobileNavComponent,
    MobileHeaderComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
