import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { IProject } from 'src/app/models/project.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './ba-project-list.component.html',
  styleUrls: ['./ba-project-list.component.scss'],
})
export class BaProjectListComponent implements OnInit, OnDestroy {
  // Public attributes
  projects: Array<IProject>;
  filteredProjects: Array<IProject>;
  private filterPrivate: string = null;
  public get filter(): string {
    return this.filterPrivate;
  }
  public set filter(value: string) {
    this.filterPrivate = value;
    this.filterChanged(this.filterPrivate);
  }
  // Private attributes
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  private readonly apiService: ApiService;
  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  // Lifce Cycle begins
  async ngOnInit(): Promise<void> {
    this.apiService
      .getAllProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.projects = data;
        this.filteredProjects = data;
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
  // Lyfe Cycle ends
  filterChanged(filter: string): void {
    const filterValue = filter.toLowerCase();
    this.filteredProjects = this.projects.filter(
      (project) =>
        project.title.toLowerCase().includes(filterValue) ||
        project.description.toLowerCase().includes(filterValue) ||
        project.author.toLowerCase().includes(filterValue)
    );
  }
}
