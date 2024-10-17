import { Component } from '@angular/core';
import { Student } from './Student'

@Component({
  selector: 'student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  tytul_listy: string;
  listaStudent: Student[];
  selected: Student = new Student("","",0,[]);

  constructor(){
    this.tytul_listy = "Lista wszystkich studentów";
    this.listaStudent = [];
    this.listaStudent.push(new Student("Michal","Kossakowski",22,[5,4,3,2,4]));
    this.listaStudent.push(new Student("Ichal","Ossakowski",21,[5,5,5,4,4]));
    this.listaStudent.push(new Student("Chal","Ssakowski",20,[1,2,3,2,4]));
    this.listaStudent.push(new Student("Al","Akowski",19,[2,3,5,2,4]));
    this.listaStudent.push(new Student("Kichał","Mossakowski",18,[2,2,2,2,5]));
  }



}

