import { Component, OnInit, Input } from '@angular/core';
import { IProject } from 'src/app/models/project.interface';
import { EProjectState } from 'src/app/models/project-state.enum';
import { HighlightPipe } from 'src/app/shared/pipes/highlight/highlight.pipe';

@Component({
  selector: 'ba-project-item',
  templateUrl: './ba-project-item.component.html',
  styleUrls: ['./ba-project-item.component.scss'],
})
export class BaProjectItemComponent implements OnInit {
  @Input() project: IProject;
  @Input() filter: string;

  constructor() {}

  ngOnInit(): void {}
  isDisabled(): boolean {
    return this.project.state !== EProjectState.Published;
  }
}
