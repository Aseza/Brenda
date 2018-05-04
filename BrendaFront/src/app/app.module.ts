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
import { SideNavComponent } from './components/sideNav/side-nav/side-nav.component';

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
    FormsModule
  ],
  providers: [
    DataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
