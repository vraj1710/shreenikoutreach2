import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DistributionComponent } from './distribution/distribution.component';
import { HomeComponent } from './home/home.component';
import { LicensingComponent } from './licensing/licensing.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"Licensing",component:LicensingComponent},
  {path:"distribution",component:DistributionComponent},
  {path:"marketing",component:MarketingComponent},
  { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
