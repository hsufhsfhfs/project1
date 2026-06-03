# project1 - by Anthony Charbel
# Text Search & Highlight Project

A dynamic frontend search interface built to filter an internal collection of articles and highlight matched keywords or phrases instantly as the user types.

## Features

- **Real-Time Filtering:** Scans an internal collection of articles instantly on user input without requiring a backend server.
- **Dynamic Content Highlighting:** Automatically wraps matched text components inside case-insensitive `<mark>` elements to match user criteria.
- **Clear & Dismiss Functionality:** Includes an immediate reset button within the input bar to clear the active search term.
- **Accurate Results Counter:** Updates instantly to inform the user exactly how many matching records were found.

## Technical Architecture

- Framework: React (Functional Components & Hooks)
- State Management: `useState` Hook for synchronized query tracking
- Text Parsing: Case-insensitive Regular Expressions (`RegExp`) splitting patterns to ensure original casing is preserved while matching text.

 Getting Started

 Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or download the project files.
2. Navigate to the project root directory:
   ```bash
   cd text-search-project
