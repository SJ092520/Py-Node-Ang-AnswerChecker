import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "./../../environments/environment";
import { getHeader, getHeaderForUpload, getHeaderForDownload } from '../utils/auth.utils';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  host: string = environment.apiURL;
  header: any;
  constructor(private http: HttpClient) {

  }
  throwError(err: any): string {
    let message: string = err.error.errorMessage;
    throw message || "Please try later";
  }
  //USER
  getAllUser(): Observable<any> {
    return this.http.get<any>(`${this.host}/user/profile/all`, getHeader())
      .pipe(catchError(err => this.throwError(err)));
  }

  loginUser(loginDetails: any): Observable<any> {
    return this.http.post<any>(`${this.host}/user/login`, loginDetails)
      .pipe(catchError(err => this.throwError(err)));
  }

  createUser(userDetails: any): Observable<any> {
    return this.http.post<any>(`${this.host}/user/create`, userDetails, getHeader())
      .pipe(catchError(err => this.throwError(err)));
  }

  editUser(userDetails: any, userId: string): Observable<any> {
    return this.http.put<any>(`${this.host}/user/edit/${userId}`, userDetails, getHeader())
      .pipe(catchError(err => this.throwError(err)));
  }
  //STUDENT

  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.host}/student/profile/${userId}`, getHeader())
      .pipe(catchError(err => this.throwError(err)));
  }
  uploadAnswerSheet(formData: any, studentId: string, courseYearSem: String): Observable<any> {
    return this.http.put<any>(`${this.host}/student/answer-sheet-upload/${courseYearSem}/${studentId}`, formData, getHeaderForUpload())
      .pipe(catchError(err => this.throwError(err)));
  }

  ///answer-sheet-upload/:courseYearSem/:studentId
}
