import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCourses(){
    return ["java", "js", "react", "next", "angular", "git"];
  }
}
