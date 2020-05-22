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
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements IApiService {
  private readonly endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.endpoint = environment.databaseEndpoint;
  }
  getAllProjects(): Observable<Array<IProject>> {
    const options = { params: new HttpParams({}) };
    const uri = new URL('projects', this.endpoint);

    const response = this.httpClient
      .get<IProject[]>(uri.href, options)
      .pipe(retry(3), catchError(this.handleError));

    return response;
  }

  getProject(id: number): Observable<IProject> {
    const options = { params: new HttpParams({}) };
    const uri = new URL(`projects/${id}`, this.endpoint);

    const result = this.httpClient
      .get<IProject>(uri.href, options)
      .pipe(retry(3), catchError(this.handleError));

    return result;
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
