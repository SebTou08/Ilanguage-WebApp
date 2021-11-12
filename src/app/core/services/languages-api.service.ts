import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";
import {LanguageOutput} from "../models/outputs/language-output";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LanguagesApiService {

  //basePath='http://localhost:8090/api/';
  basePath='https://ilnguae.azurewebsites.net/api/languages';
  constructor(private http: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  handleError(error: HttpErrorResponse): Promise<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.').toPromise();
  }


  getAllLanguages(): Promise<LanguageOutput>{
    return this.http.get<LanguageOutput>(this.basePath)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }
}
