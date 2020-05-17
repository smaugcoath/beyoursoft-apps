import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { IApiService } from './api.interface';
import { IProject } from 'src/app/models/project.interface';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements IApiService {
  private readonly _httpClient: HttpClient;
  private readonly Domain: URL = new URL('http://localhost:3000');
  constructor(private httpClient: HttpClient) {
    this._httpClient = httpClient;
  }
  getAllProjects(): Observable<Array<IProject>> {
    const options = { params: new HttpParams({}) };
    const URI = new URL('projects', this.Domain);

    const response = this._httpClient
      .get<Array<IProject>>(URI.href, options)
      .pipe(
        retry(3),
        catchError(this.handleError),
        map((data: Array<IProject>) => data)
      );

    return response;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
