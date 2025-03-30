import { dynamoDB, DYNAMO_TABLE } from './aws-config';

export async function fetchGame(gameId) {
    const params = {
        TableName: DYNAMO_TABLE,
        Key: { game_id: gameId }
    };

    try {
        const data = await dynamoDB.get(params).promise();
        return data.Item;
    } catch (error) {
        console.error("Error fetching game:", error);
        return null;
    }
}