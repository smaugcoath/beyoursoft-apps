import { IProject } from 'src/app/models/project.interface';

export interface IApiService {
  getAllProjects(): Promise<Array<IProject>>;
}
