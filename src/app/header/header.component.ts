import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { Header } from '../models/header/header.model';
import { map } from 'rxjs';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  header: Header = new Header();

  constructor(public headerService: HeaderService) {
    console.log('HeaderService', headerService);

    this.headerService
      .getHeader()
      .snapshotChanges()
      .pipe(
        map(
          (
            changes: DocumentChangeAction<Header>[] // Explicitly type 'changes'
          ) =>
            changes.map(
              (c) =>
                ({
                  id: c.payload.doc.id,
                  ...c.payload.doc.data(),
                } as Header)
            )
        )
      )
      .subscribe((data) => {
        this.header = data[0];
        console.log('Header', this.header);
      });
  }

  // this.headerService.getHeader().snapshotChanges().pipe(
  //   map(changes =>
  //     changes.map( c =>
  //     ({ id: c.payload.doc.id, ...c.payload.doc.data() } as Header )

  //     )
  //   ).subscribe( data => {
  //     this.header = data[0];
  //     console.log('Header', this.header);
  //   }

  //   )
  // )
}
