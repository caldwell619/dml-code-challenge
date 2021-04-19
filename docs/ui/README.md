# UI

## SPA Do(s) / Do Not(s)

The provided instructions for the UI

:white_check_mark: Do follow pre-established eslint rules
:white_check_mark: Use functional components and hooks
:white_check_mark: Use context (if needed)
:x: Tests are optional but a big bonus

## Highlights

- TypeScript.
- Required and additional functionality delivered.
- Mobile first and responsive.
- High level of rendering performance.
- Did not write any tests.

## Libraries Used

I always aim to keep the bundle size as low as possible. The total minified bundle size is **~330kb**

A screen shot of the bundle analysis can be found [here](./bundle.pdf).

All routes are code split, resulting in a minor benefit of offloading `date-fns` and `fuse` outside of the main chunk.

### react-query - 49kb

Out of the box caching, data fetching library. Provides loading and error state without messing with `useEffect`.

### graphql-request - 15.9kb

Easy data fetching, only grab what you care about. Empowers the front end to have a say in what comes back.

### fuse.js - 15.2kb

Searching library, supports fuzzy matching, and searching through many keys within an object. Allows users to misspell what they are looking for ans still find it.

### date-fns - 20.65kb

Modular, tree-shakable date manipulation library.

### styled-components - 33.2kb

CSS in JS library, re-renders the conditional styled based on props.

## Tooling

The provided ESLint configs conflicted heavily with Create-React-App's TypeScript template. I did the best I could, but I had to disable a few rules, in order to conform to both. I provided explanations as to why they are being turned off / disabled. I am not doing it because I don't care, but because I could not run the app without doing so.

I added Prettier to the linting config, this is an extension of the provided standard configs. It fails when something is not formatted properly. This has been super helpful when you see a PR that has formatting changes.
