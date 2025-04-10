import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { Certificates } from '../models/certificates/certificates.model';
import { map } from 'rxjs';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
  certificates: Certificates[] = [];

  constructor(public certificatesService: CertificatesService) {
    console.log('CertificatesService', certificatesService);

    this.certificatesService
      .getCertificates()
      .snapshotChanges()
      .pipe(
        map((changes: DocumentChangeAction<Certificates>[]) =>
          changes.map(
            (c) =>
              ({
                id: c.payload.doc.id,
                ...c.payload.doc.data(),
              } as Certificates)
          )
        )
      )
      .subscribe((data) => {
        this.certificates = data;
        console.log('Certificates', this.certificates);
      });
  }
}
