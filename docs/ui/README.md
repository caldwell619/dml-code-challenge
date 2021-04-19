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

A screen shot of the bundle analysis can be found [here]('./bundle.pdf).

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
