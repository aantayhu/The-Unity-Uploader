import { s3, S3_BUCKET } from './aws-config';
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadGameFile(file, folderPath) {
    const filePath = `${folderPath}/${file.name}`; // Ensure correct folder placement
    const params = {
        Bucket: S3_BUCKET,
        Key: filePath,
        Body: file,
        ContentType: file.type // Optional: Helps browsers handle different file types
    };

    try {
        await s3.send(new PutObjectCommand(params));
        return `https://${S3_BUCKET}.s3.amazonaws.com/${filePath}`;
    } catch (error) {
        console.error("Error uploading file:", error);
        return null;
    }
}