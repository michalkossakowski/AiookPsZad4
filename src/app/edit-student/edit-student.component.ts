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
  editedImie: string | undefined;
  editedNazwisko: string | undefined;
  editedWiek: number | undefined;
  gradeToAdd!: number;

  @Input() set selectedStudent(selected:Student) {
    this.editedImie = selected.imie
    this.editedNazwisko = selected.nazwisko
    this.editedWiek = selected.wiek
  }
  @Output() studentEdited: EventEmitter<Student> = new EventEmitter();

  SaveEditedStudent():void{
    this.studentEdited.emit(this.selectedStudent);
  }

  AddGrade():void{
    this.selectedStudent.DodajOcene(this.gradeToAdd);
  }
}
