import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LicensingComponent } from './licensing/licensing.component';
import { DistributionComponent } from './distribution/distribution.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    LicensingComponent,
    DistributionComponent,
    MarketingComponent,
    PagenotfoundComponent,
    HomenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
