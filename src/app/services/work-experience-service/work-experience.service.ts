import { Injectable } from "@angular/core";
import { WorkExperience } from "../../models/work-experience/workExperience.model";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})

export class WorkExperienceService{

  private dbPath = '/work-experience';

  workExperienceRef: AngularFirestoreCollection<WorkExperience>;

  accesoWorkExperience = "work esperience service running...";
  constructor(private db: AngularFirestore){
    this.workExperienceRef = db.collection(this.dbPath);
  }

  getWorkExperience(): AngularFirestoreCollection<WorkExperience> {
    return this.workExperienceRef;
  }
}
