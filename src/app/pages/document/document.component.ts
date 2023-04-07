import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {DocumentMediatorService} from "../../services/mediator/document/document-mediator.service";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  readonly #documentMediator = inject(DocumentMediatorService);

  @ViewChild('coordinatesContainer', { static: true })
  elementRef!: ElementRef<HTMLHtmlElement>;

  size = 100;

  document$ = this.#documentMediator.document;
}
