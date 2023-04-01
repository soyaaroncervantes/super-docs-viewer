import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentListComponent } from './document-list.component';
import {ComponentsModule} from "../../components/components.module";


const routes: Routes = [
  { path: '', component: DocumentListComponent }
];

@NgModule({
  declarations: [
    DocumentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class DocumentListModule { }
