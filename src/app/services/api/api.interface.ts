import { IProject } from 'src/app/models/project.interface';
import { Observable } from 'rxjs';

export interface IApiService {
  getAllProjects(): Observable<IProject[]>;
  getProject(id: number): Observable<IProject>;
}
