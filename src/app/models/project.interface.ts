import { EProjectState } from './project-state.enum';

export interface IProject {
  id: number;
  title: string;
  description: string;
  author: string;
  logoUrl: string;
  imageUrl: string;
  appCodeUrl: string;
  appExampleUrl: string;
  tags: Array<string>;
  state: EProjectState;
}
