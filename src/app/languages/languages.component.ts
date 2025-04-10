import { Component } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Language } from '../models/languages/language.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {

  Languages: Language[] = [];

  constructor(
    public languagesService: LanguagesService
  ) {
    console.log('LanguagesService', languagesService);
    this.languagesService
      .getLanguages()
      .snapshotChanges()
      .pipe(
        map((changes: DocumentChangeAction<Language>[]) =>
          changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() } as Language))
        )
      )
      .subscribe(data => {
        this.Languages = data;
        console.log('Languages', this.Languages);
      });
  }
}
