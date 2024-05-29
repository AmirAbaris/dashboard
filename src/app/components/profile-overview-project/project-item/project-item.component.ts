import { Component, input, output } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { ProjectItemCaptionModel } from '../models/caption-models/project-item.caption.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  public data = input.required<ProjectModel>();
  public caption = input.required<ProjectItemCaptionModel>();
  public projectCount = input.required<number>();
  public clickEvent = output<string>();
}
