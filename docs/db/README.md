# Data Store

I chose DynamoDB for the following reasons:

- Easy to use
- Fast
- Free ( for hosting demo )

## Key Strategy

Everything is done in a single table.

The partition key is `groupId`.
The range / sort key is `individualId`.

This strategy is very flexible and vague on purpose. It can be used to fit a wide range of access patterns.

## Running Locally

_You'll need Docker to run Dynamo locally._

In [dynamo/](../../dynamo), run `yarn start:db`.

This launches the Dynamo image, and creates a table with the proper keys. The endpoint is exposed over the network bridge on port `8000`.

## Accessing Data

In all instances of accessing Dynamo, I use my own library [common-aws-actions](https://github.com/christopher-caldwell/common-aws-actions) to access Dynamo. This library handles the connectivity to the local instance, and has wrappers for most of the annoying DynamoDB operations.
