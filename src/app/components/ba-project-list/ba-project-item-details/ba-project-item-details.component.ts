import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { IProject } from 'src/app/models/project.interface';
import { EProjectState } from 'src/app/models/project-state.enum';

@Component({
  selector: 'ba-ba-project-item-details',
  templateUrl: './ba-project-item-details.component.html',
  styleUrls: ['./ba-project-item-details.component.scss'],
})
export class BaProjectItemDetailsComponent implements OnInit {
  project: IProject;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.apiService
      .getProject(id)
      .subscribe((project) => (this.project = project));
  }
}
