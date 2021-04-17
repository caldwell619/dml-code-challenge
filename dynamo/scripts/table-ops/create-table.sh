#!/bin/sh

aws dynamodb create-table \
  --table-name $TABLE_NAME \
  --attribute-definitions \
      AttributeName=$PARTITION_KEY,AttributeType=S \
      AttributeName=$RANGE_KEY,AttributeType=S \
      AttributeName=$GSI_1_PARTITION_KEY,AttributeType=S \
      AttributeName=$GSI_1_RANGE_KEY,AttributeType=S \
  --endpoint-url http://localhost:8000 \
  --key-schema AttributeName=$PARTITION_KEY,KeyType=HASH AttributeName=$RANGE_KEY,KeyType=RANGE \
  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
  --global-secondary-indexes IndexName=$GSI_1_NAME,KeySchema=["{AttributeName=$GSI_1_PARTITION_KEY,KeyType=HASH}","{AttributeName=$GSI_1_RANGE_KEY,KeyType=RANGE}"],Projection="{ProjectionType=ALL}",ProvisionedThroughput="{ReadCapacityUnits=5,WriteCapacityUnits=5}"
