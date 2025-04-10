import { Injectable } from "@angular/core";
import { Certificates } from "../../models/certificates/certificates.model";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService{

  private dbPath = '/certificates';

  certificatesRef: AngularFirestoreCollection<Certificates>;

  accesoCertificates = "certificates services running...";

  constructor(private db: AngularFirestore) {
    this.certificatesRef = db.collection(this.dbPath);
  }

  getCertificates(): AngularFirestoreCollection<Certificates> {
    return this.certificatesRef;
  }
}
