import { EducationService } from './../services/education-service/education.service';
import { Component } from '@angular/core';
import { Education } from '../models/education/education.model';
import { map } from 'rxjs';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educations: Education[] = [];

  constructor(public educationService: EducationService) {
    console.log('EducationService', educationService);

    this.educationService
      .getEducation()
      .snapshotChanges()
      .pipe(
        map((changes: DocumentChangeAction<Education>[]) =>
          changes.map(
            (c) =>
              ({
                id: c.payload.doc.id,
                ...c.payload.doc.data(),
              } as Education)
          )
        )
      )
      .subscribe((data) => {
        this.educations = data;
        console.log('Educations', this.educations);
      });
  }
}
