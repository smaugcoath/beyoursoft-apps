import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { IProject } from 'src/app/models/project.interface';

@Component({
  selector: 'ba-project-list',
  templateUrl: './ba-project-list.component.html',
  styleUrls: ['./ba-project-list.component.scss']
})
export class BaProjectListComponent implements OnInit {

  projects: Array<IProject>;

  private readonly _apiService: ApiService;
  constructor(apiService: ApiService) {
    this._apiService = apiService;

   }

  async ngOnInit(): Promise<void> {
    this.projects = await this._apiService.getAllProjects();
  }

}
