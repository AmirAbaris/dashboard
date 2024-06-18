import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * Validates if the new password and confirm new password fields match.
 *
 * @param {AbstractControl} control - The control to validate.
 * @return {ValidationErrors | null} - Returns an object with the key 'passwordMismatch' if the passwords do not match, otherwise returns null.
 */
export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const passwordFormKeys = {
        newPasswordCtrl: 'newPasswordCtrl',
        confirmNewPasswordCtrl: 'confirmNewPasswordCtrl'
    }
    const newPassword = control.get(passwordFormKeys.newPasswordCtrl);
    const confirmNewPassword = control.get(passwordFormKeys.confirmNewPasswordCtrl);

    return newPassword && confirmNewPassword && newPassword.value !== confirmNewPassword.value
        ? { passwordMismatch: true }
        : null;
}