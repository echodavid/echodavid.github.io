import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { LanguagesComponent } from './languages/languages.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

import { AngularFireModule } from '@angular/fire/compat';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    CertificatesComponent,
    EducationComponent,
    InterestsComponent,
    LanguagesComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
