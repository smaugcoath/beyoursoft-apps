import { Injectable } from '@angular/core';
import { IProject } from 'src/app/models/project.interface';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/models/project.model';
import { IApiService } from './api.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockApiService implements IApiService {
  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Array<IProject>> {
    const result = this.http.get<Array<IProject>>('server/database.json').pipe(
      map((data: any) => {
        return data.projects;
      })
    );

    return result;
  }
}
