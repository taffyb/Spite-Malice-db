aws dynamodb create-table `
--table-name sm_users `
--attribute-definitions `
    AttributeName=guid,AttributeType=S `
    AttributeName=name,AttributeType=S `
    AttributeName=create-timestamp,AttributeType=N `
    AttributeName=update-timestamp,AttributeType=N `
--key-schema `
    AttributeName=guid,KeyType=HASH `
    AttributeName=create-timestamp,KeyType=RANGE `
--local-secondary-indexes `
    'IndexName=lsi_name,KeySchema=[{AttributeName=guid,KeyType=HASH},{AttributeName=name,KeyType=RANGE}],Projection={ProjectionType=ALL}' `
    'IndexName=lsi_update-timestamp,KeySchema=[{AttributeName=guid,KeyType=HASH},{AttributeName=update-timestamp,KeyType=RANGE}],Projection={ProjectionType=ALL}' `
--provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1

