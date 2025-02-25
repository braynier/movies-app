# A word from me...

Let me introduce you to my project, with an overview of decisions made, the techstack, features and improvements/bugs.

## Installation

Clone the repo or download as a .zip, install the dependencies with:

```bash
npm install
```

## Techstack

- React + TS + Vite - modern frontend development,seems that Vite is the standard go-to build tool for React, TS is a necessity for complex modern web development, simple JS is just not reliable anymore.
- React Router - mostly used it because of my previous experiences with it, therefore used it. Critical for data loading into pages for this application and setting up routing.
- TailwindCSS - less cumbersome than pure CSS, let's focus more on implementing UI/UX logic.
- React-icons - a few icons, lightweight.
- Axios - a standard library for a service layer for communication with an API, coud've opted for React-Query, however, the sorting,pagination, filtering was done client-side, React-Query woudve been an excellent choice for server-side pagination, sorting, filtering.
- Zustand - lightweight state management library, Redux looked a bit too much for this project.

## Overview

Adhering to the task, and the **sole** given API endpoint, pagination, filtering, sorting was done purely **client-side**.

Pagination, sorting, filtering logic is encapsulated, using react hooks making it reusable pieces of logic that can be applied in multiple places of the app.

Components are made as much reusable as they can (we can always find ways to even seperate them further), using props to render pieces of other modules (pagination, filtering, sorting) and the logic on how these modules are handled is written in the component that they are imported in.

Communication with the API is seperated into a services layer, to sperate bussiness and app logic, and have a nice place to configure pure API request handling using robust AXIOS package.

Data loading is done in pages using loaders provided by react-query. We do render as you fetch type of approach, and avoid data waterfalls.

### Some key improvements...

Overall the application functions as it is, however:

Data persistence in the movie details will be lost on page reload - could implement zustand persistence. If allowed to send id as a parameter to the API endpoint - use loader.

Thorough unit testing using Vitest.

Optimizing re-renders of sorting, pagination, filtering.

Refine color pallete, add more centralised theme in Tailwind.
