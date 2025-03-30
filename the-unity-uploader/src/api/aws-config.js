import { S3Client } from "@aws-sdk/client-s3";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

const REGION = import.meta.env.VITE_AWS_REGION;
const S3_BUCKET = import.meta.env.VITE_S3_BUCKET;
const DYNAMO_TABLE = import.meta.env.VITE_DYNAMO_TABLE;

const credentials = fromCognitoIdentityPool({
    clientConfig: { region: REGION },
    identityPoolId: import.meta.env.VITE_COGNITO_IDENTITY_POOL_ID, // Ensure this is in your .env
});

const s3 = new S3Client({ region: REGION, credentials });
const dynamoDB = new DynamoDBClient({ region: REGION, credentials });

export { s3, dynamoDB, S3_BUCKET, DYNAMO_TABLE };