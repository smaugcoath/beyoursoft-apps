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
  public get stateIcon(): string {
    return this.getStateIcon(this.project.state);
  }

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.apiService
      .getProject(id)
      .subscribe((project) => (this.project = project));
  }

  private getStateIcon(state: EProjectState): string {
    let result: string;
    switch (+state) {
      case EProjectState.Published:
        result = 'done_outline';
        break;
      case EProjectState.InProggress:
        result = 'hourglass_empty';
        break;
      case EProjectState.Proposed:
        result = 'turned_in_not';
        break;
      default:
        throw new Error('Error: The state is not mapped with an icon.');
    }
    return result;
  }
}
