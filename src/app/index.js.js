#AWS lambda function

const AWS = require('aws-sdk');
const comprehend = new AWS.Comprehend({apiVersion: '2017-11-27',region:'us-west-2'});


var resbody = {
}

exports.handler = (event, context, callback) => {

        if(event.httpMethod == 'POST'){
            var params = {
                LanguageCode : 'en',
                Text:event.body                
            }
            comprehend.detectSentiment(params,(err,data)=>{
              if (err) console.log(err, err.stack); // an error occurred
              else     resbody.message=data;           // successful response
            });
            
            comprehend.detectEntities(params, function(err, data1) {
              if (err) console.log(err, err.stack); // an error occurred
              else     resbody.entity=data1;           // successful response
            });            
            
            comprehend.detectKeyPhrases(params, function(err, data2) {
              if (err) console.log(err, err.stack); // an error occurred
              else     resbody.key_phrase=data2;           // successful response
            });            
            
            var res = {
                "statusCode" : 200,
                "body":JSON.stringify(resbody),
                "headers": {
                    "Access-Control-Allow-Origin" : "*", 
                    "Access-Control-Allow-Credentials" : true
                    },
                "isBase64Encoded": false
            };

            callback(null,res);
        }
        else{
            console.info('not a valid method');
        }
};