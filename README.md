## Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Project Structure
This project follows a structured approach for organizing Angular components, modules, and services. It features a dashboard layout with sidebars and distinct modules for various routes. Each module encapsulates related functionality, ensuring maintainability and scalability.

## Style Guide for naming
	1.	Project Structure: Describe the overall structure of your Angular project. Highlight key folders such as src/, app/, and any additional modules or feature folders (components/, services/, models/, etc.).
Example:
	•	Project Structure: The project follows a modular structure with the main application files located in src/app/. Key modules like components/, services/, and models/ are organized within app/.
	2.	File Naming: Use descriptive names for files that reflect their content and purpose. Follow conventions like PascalCase for Angular components, camelCase for services and helpers, and kebab-case for stylesheets.
Example:
	•	account-change-password-main.component.ts: Angular component for the main account change password functionality.
	•	password-strength-validator.ts: Helper function for validating password strength.
	•	environment.development.ts: Development environment configuration file.
	3.	Variable and Property Naming: Use meaningful and descriptive names for variables and properties. Follow camelCase for consistency and readability.
Example:
	•	passwordErrorCaption: Stores error messages related to password validation.
	•	changePasswordCaption: Holds text translations for the change password component.
	4.	Constant Naming: Use uppercase letters and underscores for constants. Constants should be descriptive and self-explanatory.
Example:
	•	PASSWORD_MIN_LENGTH: Minimum length required for a valid password.
	•	CONFIG_URL: URL path for configuration files.
	5.	Method Naming: Use verbs or action words to describe what the method does. Follow camelCase for method names.
Example:
	•	_initializeChangePasswordForm(): Sets up the form for changing the user’s password.
	•	_getCaptions(): Retrieves translation captions for the change password component.
	6.	Template and CSS Class Naming: Use descriptive names that convey the purpose of elements and styles. Use kebab-case for CSS classes and template variables.
Example:
	•	<mat-form-field appearance="outline">: Angular Material form field with outline appearance.
	•	.text-charcoal-blue: CSS class for text styled in charcoal blue color.
	7.	Angular Decorator Naming: Use PascalCase for Angular component selectors, camelCase for services, and injectable classes.
Example:
	•	@Component({ selector: 'app-account-change-password-main', ... }): Component decorator for the main account change password component.
	•	@Injectable() class TranslateService { ... }: Injectable service for handling translation functionalities.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Node 
version -> v20.9.0
