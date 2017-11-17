import AWS from "aws-sdk";

AWS.config.update({region: "ap-southeast-1"});

export function call(action, params) {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    return dynamodb[action](params).promise();
}