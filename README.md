# Export Example Angular

This project is an example of an Angular application that allows exporting data in different formats, such as PDF and Excel, using libraries like `ngx-export-as` and `xlsx`.

## Technologies Used

- **Angular**: Main framework for application development.
- **TypeScript**: Primary language for code implementation.
- **npm**: Package manager used to install dependencies.
- **Material Design**: For the user interface.
- **xlsx**: For exporting data to Excel files.
- **file-saver**: For saving files to the user's system.
- **ngx-export-as**: For exporting data in formats like PDF, PNG, etc.

## Main Features

1. **Export to PDF**: Using `ngx-export-as`, the data table can be exported to a PDF file.
2. **Export to Excel**: Using `xlsx`, the data table can be exported to an Excel (.xlsx) file.
3. **Pagination**: Implemented with Angular Material's `MatPaginator`.
4. **Interactive Table**: Using Angular Material's `MatTable` to display data.

## Project Structure

- **`src/app/services/excel.service.ts`**: Service to handle data export to Excel.
- **`src/app/services/export-ngx.service.ts`**: Service to handle data export with `ngx-export-as`.
- **`src/app/app.component.ts`**: Main component containing the table logic and export buttons.
- **`src/app/app.component.html`**: Template of the main component with the table and export buttons.

## Installation

1. Clone this repository:
   ```bash
   git clone <REPOSITORY_URL>
   cd export-example-angular
    ```
   
2. Install the project dependencies:
   ```bash
   npm install
    ```

3. Start the development server:
  ```bash
  ng serve
  Open your browser and navigate to http://localhost:4200.
  ```

## Usage

Export to PDF: Click the Export PDF (ngx-export-as) button to download the table in PDF format.
Export to Excel: Click the Export Excel (xlsx) button to download the table in Excel (.xlsx) format.
Pagination: Use the paginator below the table to navigate through pages of data.
Contribution
If you want to contribute to this project, follow these steps:


Fork the repository.
Create a new branch for your feature or bug fix:
git checkout -b feature/new-feature
Make your changes and commit them:
git commit -m "Add new feature"
Push your changes to your repository:
git push origin feature/new-feature
Open a pull request in this repository.
