import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthConfig, AuthModule } from '@auth0/auth0-angular';
import { AuthHttpInterceptor } from './auth.interceptor';
import { environment } from './environments/environment';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FooterComponent } from './shared/footer/footer.component';
import { FaqComponent } from './shared/faq/faq.component';
import { StoreModule } from '@ngrx/store';

@NgModule({ declarations: [AppComponent, ToolbarComponent, FooterComponent, FaqComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        AuthModule.forRoot({
            domain: environment.auth0.domain,
            clientId: environment.auth0.clientId,
            authorizationParams: {
                redirect_uri: environment.auth0.redirectUri,
                audience: environment.auth0.audience,
            },
        } as unknown as AuthConfig),
        MaterialModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}, {})], providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
