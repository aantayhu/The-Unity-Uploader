import { s3, S3_BUCKET } from './aws-config';

export async function uploadGameFile(file, fileName) {
    const params = {
        Bucket: S3_BUCKET,
        Key: `gameexe/${fileName}`,
        Body: file
    };

    try {
        await s3.upload(params).promise();
        return `https://${S3_BUCKET}.s3.amazonaws.com/gameexe/${fileName}`;
    } catch (error) {
        console.error("Error uploading file:", error);
        return null;
    }
}