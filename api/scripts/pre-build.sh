#!/bin/sh

printf "\n\nRunning pre-build checks"
printf "\n\n"

# ESlint
yarn lint
if [ $? != 0 ]; then
  exit 1
fi

node scripts/recursiveCommand.js \
  --filePath='lambdas' \
  --command='yarn type-check'