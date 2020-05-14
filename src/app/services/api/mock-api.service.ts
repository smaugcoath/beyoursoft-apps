import { Injectable } from '@angular/core';
import { IApiService } from './api.interface';
import { IProject } from 'src/app/models/project.interface';
import { HttpClient } from '@angular/common/http';
// Import functions from library
import { deserialize } from 'typescript-json-serializer';
import { Project } from 'src/app/models/project.model';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MockApiService implements IApiService {
  private readonly _http: HttpClient;

  constructor(private http: HttpClient) {
    this._http = http;
  }

  async getAllProjects(): Promise<Array<IProject>> {
    const result = (
      await this._http.get<Array<any>>('assets/mock-data.json').toPromise()
    ).map(
      (x) =>
        new Project(
          x.id,
          x.title,
          x.description,
          x.author,
          x.logoUrl,
          x.imageUrl,
          x.appCodeUrl,
          x.appExampleUrl,
          x.tags,
          x.state
        )
    );

    return result;
  }
}
