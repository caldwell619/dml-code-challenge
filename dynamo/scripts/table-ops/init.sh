#!/bin/sh

docker-compose up &

sh scripts/table-ops/create-table.sh
