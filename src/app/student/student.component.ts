import { Component } from '@angular/core';
import { Student } from './Student'
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from '../add-student/add-student.component';
import { EditStudentComponent } from "../edit-student/edit-student.component";
import { StudentService } from '../services/student.service';

@Component({
  selector: 'student',
  standalone: true,
  imports: [CommonModule, AddStudentComponent, EditStudentComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  tytul_listy: string;
  listaStudent!: Student[];
  selected!: Student;
  addShowing: boolean = false;
  editShowing: boolean = false;

  constructor(private studentService: StudentService){
    this.tytul_listy = "Lista wszystkich studentów";

    this.listaStudent = []
    // this.listaStudent.push(new Student("Michal","Kossakowski",22,[5,4,3,2,4]));
    // this.listaStudent.push(new Student("Ichal","Ossakowski",21,[5,5,5,4,4]));
    // this.listaStudent.push(new Student("Chal","Ssakowski",20,[1,2,3,2,4]));
    // this.listaStudent.push(new Student("Al","Akowski",19,[2,3,5,2,4]));
    // this.listaStudent.push(new Student("Kichał","Mossakowski",18,[2,2,2,2,5]));
    
    this.GetStudents()
  }

  GetStudents() {
    this.studentService.getStudents().subscribe(
      (students) => {
          this.listaStudent = students;
      }
    );
  }

  AddClick(){
    this.addShowing = true;
    this.editShowing = false;
  }
  EditClick(){
    this.editShowing = true;
    this.addShowing = false;
  }

  StudentAddedInChild(newStudent: Student){
    this.listaStudent.push(newStudent);
    this.addShowing = false;
  }

  StudentEditedInChild(){
    this.editShowing = false;
  }
}

