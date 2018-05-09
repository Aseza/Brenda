import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { RatioComponent } from './components/ratio/ratio.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/dataService/data-service.service';
import { ThemeService } from './services/themeService/theme.service';
import { WebSocketService } from './services/webSocketService/web-socket.service';
import { SideNavComponent } from './components/sideNav/side-nav/side-nav.component';
import { CountoModule } from 'angular2-counto';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ResultComponent,
    FooterComponent,
    AddModalComponent,
    SideNavComponent,
    RatioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CountoModule,
    NgxPaginationModule
  ],
  providers: [
    DataService,
    ThemeService,
    WebSocketService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
