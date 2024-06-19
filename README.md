# Dashboard Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Project Structure

This project follows a structured approach for organizing Angular components, modules, and services. It features a dashboard layout with sidebars and distinct modules for various routes. Each module encapsulates related functionality, ensuring maintainability and scalability.

### File Naming

- **Components**: Named in PascalCase.
  - Example: `AccountChangePasswordMainComponent`

- **Services and Helpers**: Named in camelCase.
  - Example: `passwordStrengthValidator`

- **Environment Configuration**: Named with environment-specific suffixes.
  - Example: `environment.development.ts`

- **Variable and Property Naming**: 
  - **Public Variables**: Use camelCase.
    - Example: `passwordErrorCaption`, `changePasswordCaption`
  - **Private Variables**: Prefix with an underscore and use camelCase.
    - Example: `_passwordMinLength`, `_environmentService`

- **Method Naming**: Use verbs or action words in camelCase.
  - Example: `_initializeChangePasswordForm()`, `_getCaptions()`

- **Template and CSS Class Naming**: Use kebab-case for CSS classes and template variables.
  - Example: `<mat-form-field appearance="outline">`, `.text-charcoal-blue`

- **Angular Decorator Naming**: Use PascalCase for component selectors, camelCase for services.
  - Example: `@Component({ selector: 'app-account-change-password-main', ... })`, `@Injectable()`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Node Version

This project requires Node version v20.9.0.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
