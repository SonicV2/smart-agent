This project was bootstrapped with [Serverless Stack](https://serverless-stack.com/) tutorial.

## Table of Contents

- [Before You Get Started](#before-you-get-started)
- [Build The Backend](#build-the-backend)
  - [Setup The Backend Services](#setup-the-backend-services)
  - [Compile And Test Lambdas Locally](#compile-and-test-lambdas-locally)
  - [Deploy Lambdas to AWS](#deploy-lambdas-to-aws)
- [Build The Frontend](#build-the-frontend)

## Before You Get Started

>Note The following instructions assume that you are deploying all backend resources in the AWS Asia Pacific (Singapore) region.
>If this is not the region you want to deploy to, you will have to update the `serverless.yml` project file to the one that works for you.

Before you can build and deploy successfully the backend and frontend components, ensure you complete the following operations:

* Download and install `node.js` and `npm` on your local system.
* Sign up for an [AWS](https://aws.amazon.com) account.
* Install the [AWS Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/installing.html).

* Clone this repository: `git clone https://github.com/alagala/react-learn-serverless.git`.

## Build The Backend

### Setup The Backend Services

1. [Create the DynamoDB table](https://serverless-stack.com/chapters/create-a-dynamodb-table.html) that is going to store the data managed by the application.
2. [Create the S3 Bucket](https://serverless-stack.com/chapters/create-an-s3-bucket-for-file-uploads.html) that will be used to upload the file attachments managed by the application.
3. [Create a Cognito User Pool](https://serverless-stack.com/chapters/create-a-cognito-user-pool.html) that will be used to handle user accounts and authentication in a secure and reliable way.
4. [Create a Cognito Test User](https://serverless-stack.com/chapters/create-a-cognito-test-user.html) that will be used to test the authentication portion of the app.

### Compile And Test Lambdas Locally

Install the [Serverless Framework](https://serverless.com/) and all the required project dependencies by executing:
```sh
$ npm install -g serverless
$ npm install
```

Test the ability to create notes by issuing the following command from the project root folder:
```sh
$ serverless invoke local --function create-note --path mocks/create-event.json
```

Make a note of the `noteId` in the response and update the `pathParameters.id` attribute with its value in these files:
```
mocks/
  get-event.json
  update-event.json
  list-event.json
```

Test the ability to retrieve a note by its id:
```sh
$ serverless invoke local --function get-note --path mocks/get-event.json
```

Test the ability to return a list of all the notes a user has:
```sh
$ serverless invoke local --function list-notes --path mocks/list-event.json
```

Test the ability to update a note with a new note object given its id:
```sh
$ serverless invoke local --function update-note --path mocks/update-event.json
```

Finally, test the ability to delete a given note:
```sh
$ serverless invoke local --function delete-note --path mocks/delete-event.json
```

### Deploy Lambdas to AWS

Run the following in your working directory:
```sh
$ serverless deploy
```

In those cases where you might want to deploy just a single API, you can run the following:
```sh
$ serverless deploy function -f list
```

## Build The Frontend

TODO
