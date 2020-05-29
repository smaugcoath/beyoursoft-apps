import { IProject } from './project.interface';
import { EProjectState } from './project-state.enum';

export class Project implements IProject {
  id: number;
  title: string;
  description: string;
  author: string;
  linedinUrl: string;
  logoUrl: string;
  imageUrl: string;
  appCodeUrl: string;
  appExampleUrl: string;
  tags: Array<string>;
  state: EProjectState;
  /**
   *
   */
  constructor(
    id: number,
    title: string,
    description: string,
    author: string,
    logoUrl: string,
    imageUrl: string,
    appCodeUrl: string,
    appExampleUrl: string,
    tags: Array<string> = new Array<string>(),
    state: EProjectState = EProjectState.Proposed
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.logoUrl = logoUrl;
    this.imageUrl = imageUrl;
    this.appCodeUrl = appCodeUrl;
    this.appExampleUrl = appExampleUrl;
    this.tags = tags;
    this.state = state;
  }
}
