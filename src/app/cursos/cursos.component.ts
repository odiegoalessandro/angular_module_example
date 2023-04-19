import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  portalName: string;
  courses: string[];

  constructor(private cursosService: CursosService) {
    this.portalName = "https://youtube.com";
    this.courses = cursosService.getCourses();
  }

}
