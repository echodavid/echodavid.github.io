import { Component } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperience } from '../models/work-experience/workExperience.model';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {

  WorkExperiences: WorkExperience[] = [];

  constructor(
    public workExperienceService: WorkExperienceService
  ){
    console.log('WorkExperienceService', workExperienceService);
    this.workExperienceService
      .getWorkExperience()
      .snapshotChanges()
    .pipe(
      map((changes: DocumentChangeAction<WorkExperience>[]) =>
        changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() } as WorkExperience))
      )

    ).subscribe(data => {
      this.WorkExperiences = data;
      console.log('WorkExperience', this.WorkExperiences);
    })
  }
}
