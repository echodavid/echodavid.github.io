import { Component } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests.service';
import { Interest } from '../models/interest/interset.model';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {

  interests: Interest[] = [];

  constructor(
    public interestsService: InterestsService
  ) {
    console.log('InterestsService', interestsService);
    this.interestsService
      .getInterests()
      .snapshotChanges()
      .pipe(
        map((changes: DocumentChangeAction<Interest>[]) =>
          changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() } as Interest))
        )
      )
      .subscribe(data => {
        this.interests = data;
        console.log('Interests', this.interests);
      });
  }
}
