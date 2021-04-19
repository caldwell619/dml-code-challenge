# API

## Lambda Do(s) / Do Not(s)

The provided instructions for the API

:white_check_mark: Do follow pre-established eslint rules
:white_check_mark: Return proper status codes
:x: Tests are optional but a big bonus

## Highlights

- All TypeScript.
- Deployed.
- All functionality delivered.
- Bundle Lambda with webpack to reduce size in S3
- Built for Lambda, taking advantage of stateful-ness to enable in memory caching at no additional cost.
- Functionality mirrored across GraphQL style and REST style to check off the actually asked for requirements
- No tests right now.

## GraphQL

One 62kb Lambda handles the entire API. I understand this was not asked for at all, but I mainly wanted to show how powerful GraphQL is. All of the data validation is built in. By the time your resolver is running, you can be sure of the type safety.

## Caching

You mentioned using Redis, which obviously is not free. This implementation of caching is a sort of best effort, not entirely meant to be a real cache. The premise here is that the Lambda container will be alive for approx 5 min after the last invocation. During that time, an in memory cache will be alive and ready with 0 network overhead. Frequent reads with infrequent writes are perfect for this use case.

When a call for the cache is made, it will first check if it's there and not expired. If so, it will return the cached data. This process takes about 6ms-10ms with a warm Lambda. This keeps the billing extremely low.

If the data is not in the cache, it will execute the callback you provide, then cache the result on the way out. It's super similar to `useMemo` in React.

The downside here is that if you update something in the cache, there is **no guarantee you will be in the same Lambda that has it cached**. This is why infrequent writes are great for this. You also cannot change this cache from outside the Lambda such as some micro-service or cron schedule.

A good way to get around this setback it to build a manual refresh trigger into the UI. Some check box or button that ignores, then deletes the cached data and goes straight to the source. This eliminates the frustration of knowing your data is there, but not in the cache.

## REST

I am fully aware that not following simple directions in a code challenge is a recipe for disaster. I know you guys are not using GraphQL, so I made the same functionality with the traditional REST style API. I hope this is okay, I didn't want to just fly off and make something you didn't ask for.
