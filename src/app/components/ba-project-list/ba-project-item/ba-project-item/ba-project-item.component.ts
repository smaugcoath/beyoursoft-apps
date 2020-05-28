import { Component, OnInit, Input } from '@angular/core';
import { IProject } from 'src/app/models/project.interface';
import { EProjectState } from 'src/app/models/project-state.enum';
import { HighlightPipe } from 'src/app/shared/pipes/highlight/highlight.pipe';
import { CustomIconService } from 'src/app/services/custom-icon/custom-icon.service';

@Component({
  selector: 'ba-project-item',
  templateUrl: './ba-project-item.component.html',
  styleUrls: ['./ba-project-item.component.scss'],
})
export class BaProjectItemComponent implements OnInit {
  @Input() project: IProject;
  @Input() filter: string;

  public get isPublished(): boolean {
    return this.project.state === EProjectState.Published;
  }

  public get isProposed(): boolean {
    return this.project.state === EProjectState.Proposed;
  }

  public get isInProgress(): boolean {
    return this.project.state === EProjectState.InProgress;
  }

  public get isDisabled(): boolean {
    return this.isProposed;
  }

  constructor(private customIconService: CustomIconService) {
    customIconService.register();
  }

  ngOnInit(): void {}

  getStateIcon(): string {
    let result: string;
    switch (this.project.state) {
      case EProjectState.InProgress:
        result = 'hourglass_empty';
        break;
      case EProjectState.Proposed:
        result = 'turned_in_not';
        break;
      case EProjectState.Published:
        result = 'done_all';
        break;

      default:
        const enumValues = Object.values(EProjectState);
        throw new Error(
          `Invalid project state. The value must be a value given by the enum ${enumValues}`
        );
        break;
    }

    return result;
  }
}
