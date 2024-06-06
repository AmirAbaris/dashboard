import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * Validates the strength of a password.
 *
 * @param {AbstractControl} control - The control to validate.
 * @return {ValidationErrors | null} - Returns an object with the key 'passwordStrength' if the password is not strong enough, otherwise returns null.
 */
export function passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const valid = hasNumber && hasSpecialCharacter;

    return !valid ? { passwordStrength: true } : null;
}