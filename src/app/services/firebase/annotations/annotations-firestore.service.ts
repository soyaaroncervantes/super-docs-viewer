import {inject, Injectable} from '@angular/core';
import {collection, collectionData, deleteDoc, doc, setDoc} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";
import {NewAnnotation, Annotation} from "../../../interfaces/annotation.interface";
import {FirebaseFirestoreService} from "../base/firestore/firebase-firestore.service";

@Injectable({
  providedIn: 'root'
})
export class AnnotationsFirestoreService extends FirebaseFirestoreService {
  getAnnotations$(documentId: string) {
    const collectionReference = this.getAnnotationsCollection(documentId);
    return collectionData(collectionReference, { idField: 'id' }) as Observable<Annotation[]>;
  }

  createAnnotation(annotation: NewAnnotation, documentId: string): Observable<void> {
    const collectionReference = this.getAnnotationsCollection(documentId);
    const documentReference = doc(collectionReference);
    return from(setDoc(documentReference, annotation));
  }

  deleteAnnotation(annotation: Annotation, documentId: string): Observable<void> {
    const documentReference = doc(this.firestore, 'docs', documentId, 'annotations', annotation.id!!);
    return from( deleteDoc(documentReference) );
  }

  private getAnnotationsCollection(documentId: string) {
    return collection(this.firestore, 'docs', documentId, 'annotations');
  }
}
