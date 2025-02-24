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
