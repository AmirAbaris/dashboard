import { ToggleChangeDataModel } from '../models/toggle-change-data.model';
import { Component, input, output } from '@angular/core';
import { ProfileOverviewPlatformSettingCaptionModel } from '../models/caption-models/profile-overview-platform-setting.caption.model';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-profile-overview-platform-setting',
  templateUrl: './profile-overview-platform-setting.component.html',
  styleUrl: './profile-overview-platform-setting.component.scss'
})
export class ProfileOverviewPlatformSettingComponent {
  //#region Properties
  public caption = input.required<ProfileOverviewPlatformSettingCaptionModel>();
  public slideToggleEvent = output<ToggleChangeDataModel>();

  public emailWhenFollows = false;
  public emailWhenAnswers = false;
  public emailWhenMentions = false;
  public newLaunchesAndProjects = false;
  public monthlyProductUpdates = false;
  public subscribeToNewsletter = false;
  public readonly toggleNames = {
    emailWhenFollows: 'emailWhenFollows',
    emailWhenAnswers: 'emailWhenAnswers',
    emailWhenMentions: 'emailWhenMentions',
    newLaunchesAndProjects: 'newLaunchesAndProjects',
    monthlyProductUpdates: 'monthlyProductUpdates',
    subscribeToNewsletter: 'subscribeToNewsletter'
  };

  //#endregion

  //#region Handler methods
  /**
   * Handles the change event of a slide toggle.
   * It updates the value of the toggle in the component
   * and emits an event with the new value.
   *
   * @param {MatSlideToggleChange} event - The event object containing information about the toggle change.
   * @param {string} toggleName - The name of the toggle.
   * @return {void} This function does not return a value.
   */
  public slideToggleEventHandler(event: MatSlideToggleChange, toggleName: string): void {
    // Create a new object with the name and value of the slide toggle
    const toggleChangeValue: ToggleChangeDataModel = {
      name: toggleName,
      value: event.checked
    }

    console.log('slide change value:', toggleChangeValue);

    // Emit the slideToggleEvent with the new value
    this.slideToggleEvent.emit(toggleChangeValue);
  }
  //#endregion
}
