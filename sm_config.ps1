aws dynamodb create-table `
--table-name sm_config `
--attribute-definitions `
    AttributeName=config-code,AttributeType=S `
--key-schema `
    AttributeName=config-code,KeyType=HASH `
--provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1

