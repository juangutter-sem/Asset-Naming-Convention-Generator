# DM Name Generator
## Goal 
The DM Name Generator is a static web tool that helps marketing teams build consistent names for campaigns, ad groups, and assets based on a documented naming convention. Users can upload a CSV schema or rely on an embedded JSON schema to generate names and review available parameter values.

## Repository Structure
File	Description
- index.html	Main HTML page. Contains the header, CSV upload interface, and a theme toggle button that switches between light and dark modes
- styles.css	Global styles and CSS variables for light and dark themes
- app.js	Core logic that renders the naming generator, parses uploaded CSV files, and loads JSON schemas. Includes event listeners for file uploads and drag-and-drop actions
- schema.master.json	Default JSON schema loaded on start-up; defines available generators, their fields, ordering, delimiters, and case rules
- CSV_SCHEMA.md	Documentation of the expected CSV format used to describe generator fields and values

## Getting Started
- Clone or download the repository and open index.html in any modern browser.
- Use the theme toggle (🌓) in the header to switch between light and dark modes.
- The interface shows generator panels and a drop zone for CSV schema uploads.

## Updating Parameters and Values
1. Upload a CSV Schema
Open the CSV Master File referenced in CSV_SCHEMA.md, make your edits, and export it as a .csv.

In the web interface, use the Upload CSV button or drag the file into the drop zone.

The loadCSV function parses the file and replaces the in-memory schema, re-rendering all generator panels.

2. Modify the JSON Schema
Edit schema.master.json (or provide an alternate schema.json in the same directory) to add or update generators, field orders, delimiters, and value codes.

On load, app.js attempts to fetch schema.master.json; if unavailable, it tries schema.json or falls back to the embedded default schema.

Refresh the page to apply your changes. The schema is also cached in localStorage for faster subsequent loads.
