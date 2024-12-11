import {Result} from "./Response";

const baseURL = 'http://51.250.43.113:30020';


export type FeedResponse = {
    id: string;
    beatmaker: {
        id: string;
        username: string;
        pseudonym: string;
    };
    image: string;
    name: string;
    description: string;
    genre: string;
    created_at: string;
};

export class AudioRepository {
    static async feed(token: string): Promise<Result<FeedResponse>> {
        const response = await fetch(`${baseURL}/v1/feed/audio`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.tjVEMiS5O2yNzclwLdaZ-FuzrhyqOT7UwM9Hfc0ZQ8Q",
            },
        });

        const payload = await response.json();
        if (response.ok) {
            return {
                success: true,
                data: payload,
            };
        }

        return {
            success: false,
            data: {
                ...payload,
                status: response.status,
            },
        };
    }
}
