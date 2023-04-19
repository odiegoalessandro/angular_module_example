import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursoDetailsComponent } from './curso-details/curso-details.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetailsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
