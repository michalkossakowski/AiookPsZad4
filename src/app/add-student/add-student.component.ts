import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student/Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  public imie!:string;
  public nazwisko!:string;
  public wiek!:number;
  @Output() studentAdded: EventEmitter<Student> = new EventEmitter();

  AddNewStudent():void{
    let newStudent = new Student(this.imie,this.nazwisko,this.wiek,[])
    this.studentAdded.emit(newStudent);
  }
}
