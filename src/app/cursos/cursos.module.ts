import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursoDetailsComponent } from './curso-details/curso-details.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';



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
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
