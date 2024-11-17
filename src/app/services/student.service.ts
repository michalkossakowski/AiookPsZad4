import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, map, Observable, of} from 'rxjs';
import { Student } from '../student/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost:7777/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<{ students: Student[] }>(this.url) 
      .pipe(
        map(response => response.students),
        catchError(this.handleError<Student[]>('getStudents', []))
      );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }
}
