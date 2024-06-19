import { Inject, Injectable, InjectionToken } from '@angular/core';
import { EnvironmentModel } from '../models/environment.model';

/**
 * This token is used to inject the environment configuration into the application.
 * It is defined as an InjectionToken<EnvironmentModel> so that it can be easily replaced
 * with a mock environment configuration during testing.
 */
export const ENV_CONFIG: InjectionToken<EnvironmentModel> = new
  InjectionToken<EnvironmentModel>('env.config');

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  //#region Constructor
  constructor(@Inject(ENV_CONFIG) public environmentConfig: EnvironmentModel) {}
  //#endregion
}
