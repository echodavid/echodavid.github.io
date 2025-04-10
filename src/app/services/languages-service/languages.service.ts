import { Injectable } from "@angular/core";
import { Language } from "../../models/languages/language.model";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  private dbPath = '/language';

  languagesRef: AngularFirestoreCollection<Language>;

  accesoLanguages = 'languages services running...';
  constructor(private db: AngularFirestore) {
    this.languagesRef = db.collection(this.dbPath);
  }
  getLanguages(): AngularFirestoreCollection<Language> {
    return this.languagesRef;
  }
}
