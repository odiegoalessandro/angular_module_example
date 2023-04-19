import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  portalName: string;
  courses: string[] = ["java", "javascrip", "react", "next", "angular", "node", "git"];

  constructor() {
    this.portalName = "https://youtube.com"
  }
}
