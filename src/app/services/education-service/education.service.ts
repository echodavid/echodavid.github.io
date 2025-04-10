import { Injectable } from "@angular/core";
import { Education } from "../../models/education/education.model";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})

export class EducationService{


  private dbPath = '/education';

  educationRef: AngularFirestoreCollection<Education>;

  accesoEducation = "education services running...";
  constructor(private db: AngularFirestore) {
      this.educationRef = db.collection(this.dbPath);
    }

  getEducation(): AngularFirestoreCollection<Education> {
    return this.educationRef;
  }
}
