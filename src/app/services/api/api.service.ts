import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiService } from './api.interface';
import { IProject } from 'src/app/models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApiService {
  private readonly _httpClient: HttpClient;
  constructor(private httpClient: HttpClient) {
    this._httpClient = httpClient;
  }
  async getAllProjects(): Promise<Array<IProject>> {
    throw new Error("Method not implemented.");
  }
}
