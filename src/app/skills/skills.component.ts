import { Component } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Skills } from '../models/skills/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  Skills: Skills[] = [];

  constructor(
    public skillsService: SkillsService
  ) {
    console.log('SkillsService', skillsService);
    this.skillsService
      .getSkills()
      .snapshotChanges()
      .pipe(
        map((changes: DocumentChangeAction<Skills>[]) =>
          changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() } as Skills))
        )
      )
      .subscribe(data => {
        this.Skills = data;
        console.log('Skills', this.Skills);
      });
  }
}
