aws dynamodb create-table `
--table-name sm_players `
--attribute-definitions `
    AttributeName=uuid,AttributeType=S `
--key-schema `
    AttributeName=uuid,KeyType=HASH `
--provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1

