import { dynamoDB, DYNAMO_TABLE } from './aws-config';
import { PutItemCommand } from '@aws-sdk/client-dynamodb';

export async function saveGameMetadata(game) {
    const params = {
        TableName: DYNAMO_TABLE,
        Item: {
            game_id: { S: game.game_id },
            title: { S: game.title },
            description: { S: game.description },
            categories: { SS: game.categories }, // Stored as String Set
            mac_file: game.mac_file ? { S: game.mac_file } : { NULL: true },
            windows_file: game.windows_file ? { S: game.windows_file } : { NULL: true },
        }
    };

    try {
        await dynamoDB.send(new PutItemCommand(params));
        console.log("Game metadata saved successfully.");
    } catch (error) {
        console.error("Error saving game metadata:", error);
    }
}