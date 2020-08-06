const AWS = require('aws-sdk');
AWS.config.update({region:"eu-west-2"});
const docClient = new AWS.DynamoDB.DocumentClient();

let params = {
    RequestItems: {
        "sm_config":[
        {
            PutRequest:{
                Item:{
                    "config-code":"DEFAULT_PROFILE",
                    "value":{
                        "animation": {
                            "animate": {
                                "dealer": 1,
                                "dealerYN": false,
                                "opponent": 1,
                                "opponentYN": true,
                                "player": 0.2,
                                "playerYN": true,
                                "recycle": 1,
                                "recycleYN": false
                            },
                            "animateYN": true
                        },
                        "showStatistics": false
                    }
                }
            }
        }
        ],
        "sm_users": [
        {
            PutRequest: {
                Item: {
                    "create-timestamp": 1525013088,
                    "guid": "123456",
                    "name": "Taffy",
                    "profile": {
                        "animation": {
                            "animate": {
                                "dealer": 1,
                                "dealerYN": false,
                                "opponent": 1,
                                "opponentYN": true,
                                "player": 0.2,
                                "playerYN": true,
                                "recycle": 1,
                                "recycleYN": false
                            },
                            "animateYN": true
                        },
                        "showStatistics": false
                    }
                }
            }
        },
        {
          PutRequest: {
            Item: {
                "create-timestamp": 1525013088,
                "guid": "987654",
                "name": "Suzannah",
                "profile": {
                  "animation": {
                    "animate": {
                      "dealer": 1,
                      "dealerYN": false,
                      "opponent": 1,
                      "opponentYN": true,
                      "player": 0.2,
                      "playerYN": true,
                      "recycle": 1,
                      "recycleYN": false
                    },
                    "animateYN": true
                  },
                  "showStatistics": false
                }
              }
          }
        },
        {
            PutRequest: {
                Item: {
                    "create-timestamp": 1525013088,
                    "guid": "111111",
                    "name": "Player 1"
                }
            }
        },
        {
            PutRequest: {
                Item: {
                    "create-timestamp": 1525013088,
                    "guid": "222222",
                    "name": "Player 2"
                }
            }
        }
      ]
    }
  };
docClient.batchWrite(params,(err, data)=> {
        if (err) console.log(err);
        else console.log(JSON.stringify(data,null,2));
      }
);