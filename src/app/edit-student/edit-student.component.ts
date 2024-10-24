import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student/Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  editedImie!: string;
  editedNazwisko!: string ;
  editedWiek!: number ;
  gradeToAdd!: number;
  @Output() studentEdited: EventEmitter<Student> = new EventEmitter();

  private _selectedStudent!:Student;
  @Input() set selectedStudent(selected:Student) {
    this._selectedStudent = selected;
    this.editedImie = selected.imie
    this.editedNazwisko = selected.nazwisko
    this.editedWiek = selected.wiek
  }
  get selectedStudent(): Student{
      this._selectedStudent.imie = this.editedImie;
      this._selectedStudent.nazwisko = this.editedNazwisko;
      this._selectedStudent.wiek = this.editedWiek;
      return this._selectedStudent;
  }

  SaveEditedStudent():void{
    this.studentEdited.emit(this.selectedStudent);
  }

  AddGrade():void{
    this.selectedStudent.DodajOcene(this.gradeToAdd);
    this.gradeToAdd = 0;
  }
}
