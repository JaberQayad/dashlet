# Dashlet Playground

This is the experimental playground for **Dashlet**. Use this directory to test new features, UI tweaks, or experimental code without affecting the main production application.

## Getting Started

1.  **Install dependencies** (if you haven't already):
    ```bash
    npm install
    ```

2.  **Run Playground in Dev Mode**:
    ```bash
    npm run playground:dev
    ```
    This will:
    -   Watch for SCSS changes in `playground/css/` and compile them.
    -   Start a live-reloading server at `http://localhost:8990`.

## Architecture Note

The playground is a standalone copy of the main `app/` directory. It uses a different `localStorage` key (`dashlet_playground_services`) to ensure that experimental settings don't overwrite your main dashboard configuration.

## Merging Changes

Once you are happy with a feature built here, you can manually port the changes back to the `app/` directory.
