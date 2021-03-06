import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { GraphQLModule } from './graphql.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MovieComponent } from './components/movies/movies-grid/movies-grid.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { CinemaMaapComponent } from './components/cinema/cinema-maap/cinema-maap.component';
import { TestComponent } from './components/test/test/test.component';
import { Test2Component } from './components/test/test2/test2.component';
import { CinemaMaap2Component } from './components/cinema/cinema-maap2/cinema-maap2.component';
import { NavBarComponent } from './components/layout/header/nav-bar/nav-bar.component';
import { SidebarComponent } from './components/layout/header/sidebar/sidebar.component';
import { ImportantAddComponent } from './components/layout/header/important-add/important-add.component';
import { LoginPanelComponent } from './components/layout/header/login-panel/login-panel.component';
import { MovieCardSliderComponent } from './components/movies/movie-card-slider/movie-card-slider.component';
import { AccountViewComponent } from './components/account/account-view/account-view.component';
import { SocialComponent } from './components/login/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    CinemaMaapComponent,
    TestComponent,
    Test2Component,
    CinemaMaap2Component,
    NavBarComponent,
    SidebarComponent,
    ImportantAddComponent,
    LoginPanelComponent,
    MovieCardSliderComponent,
    AccountViewComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    GraphQLModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [{
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "65885373760-s0jjb3i1mvj37filnfmtg016tbmke4fr.apps.googleusercontent.com"/*process.env.GOOGLE_CLIENT_ID*/
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("2597571540540099" /* process.env.FACEBOOK_APP_ID */)
          }
        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
