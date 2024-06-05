import { Component, input, output } from '@angular/core';
import { ProfileOverviewPlatformSettingCaptionModel } from '../models/caption-models/profile-overview-platform-setting.caption.model';

@Component({
  selector: 'app-profile-overview-platform-setting',
  templateUrl: './profile-overview-platform-setting.component.html',
  styleUrl: './profile-overview-platform-setting.component.scss'
})
export class ProfileOverviewPlatformSettingComponent {
  //#region Properties
  public caption = input.required<ProfileOverviewPlatformSettingCaptionModel>();
  public clickSlideToggleEvent = output<void>();
  //#endregion

  //#region Handler methods
  public onClickEmailWhenFollowsSlideToggleEventHandler(): void {
    console.log('onEmailWhenFollowsSlideToggleEventHandler');
    this.clickSlideToggleEvent.emit();
  }

  public onClickEmailWhenAnswersSlideToggleEventHandler(): void {
    console.log('onEmailWhenAnswersSlideToggleEventHandler');
    this.clickSlideToggleEvent.emit();
  }

  public onClickEmailWhenMentionsSlideToggleEventHandler(): void {
    console.log('onEmailWhenMentionsSlideToggleEventHandler');
    this.clickSlideToggleEvent.emit();
  }

  public onClickNewLaunchesAndProjectsSlideToggleEventHandler(): void {
    console.log('onNewLaunchesAndProjectsSlideToggleEventHandler');
    this.clickSlideToggleEvent.emit();
  }

  public onClickMonthlyProductUpdatesSlideToggleEventHandler(): void {
    console.log('onMonthlyProductUpdatesSlideToggleEventHandler');
    this.clickSlideToggleEvent.emit();
  }

  public onClickSubscribeToNewsletterSlideToggleEventHandler(): void {
    console.log('onSubscribeToNewsletterSlideToggleEventHandler');
    this.clickSlideToggleEvent.emit();
  }
  //#endregion
}
