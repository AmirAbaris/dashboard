import { Injectable, inject } from '@angular/core';
import { ProjectRepository } from '../repositories/project.repository';
import { Observable } from 'rxjs';
import { HouseProjectItemModel } from '../components/profile-overview-general/models/house-project-item.model';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';

@Injectable()
export class ProjectService {
  //#region Properties
  private readonly _projectRepository = inject(ProjectRepository);
  //#endregion

  //#region Main logic methods
  public getProjectItems(): Observable<ProjectItemModel[]> {
    return this._projectRepository.getProjectItems();
  }

  public getHouseProjectItems(): Observable<HouseProjectItemModel[]> {
    return this._projectRepository.getHouseProjectItems();
  }
  //#endregion
}
