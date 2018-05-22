import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { RatioComponent } from './components/ratio/ratio.component';
import { HttpClientModule  } from '@angular/common/http';
import { DataService } from './services/dataService/data-service.service';
import { ThemeService } from './services/themeService/theme.service';
import { WebSocketService } from './services/webSocketService/web-socket.service';
import { SideNavComponent } from './components/sideNav/side-nav/side-nav.component';
import { CountoModule } from 'angular2-counto';
import {NgxPaginationModule} from 'ngx-pagination';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import { stompConfig } from './services/environement';
import { ResultNsearchComponent } from './components/result-nsearch/result-nsearch.component';
import { IntroComponent } from './intro/intro.component';
import { AlertComponent } from './components/alert/alert.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AllProjectsDetailsComponent } from './components/all-projects-details/all-projects-details.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


const appRoutes: Routes = [
  { path: 'projectDetails/:name/:desc/:deadline',      component: ProjectDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    SideNavComponent,
    RatioComponent,
    ResultNsearchComponent,
    IntroComponent,
    AlertComponent,
    ProjectDetailsComponent,
    AllProjectsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    FormsModule,
    CountoModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ScrollToModule.forRoot()
  ],
  providers: [
    DataService,
    ThemeService,
    WebSocketService,
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
