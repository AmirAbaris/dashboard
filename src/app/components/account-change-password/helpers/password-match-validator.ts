import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * Validates if the new password and confirm password fields match.
 *
 * @param {AbstractControl} group - The form group containing the newPasswordCtrl and confirmNewPasswordCtrl fields.
 * @return {ValidationErrors | null} - Returns null if the passwords match, otherwise returns a ValidationErrors object with the key 'passwordMismatch'.
 */
export function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const newPassword = group.get('newPasswordCtrl')?.value;
    const confirmPassword = group.get('confirmNewPasswordCtrl')?.value;

    return newPassword === confirmPassword ? null : { passwordMismatch: true }
}