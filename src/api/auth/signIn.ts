import { Credential } from "./types";
import config from "../config";

export interface SignIn {
    id: string;
    password: string;
}

export default async(
    {
        id,
        password
    }: SignIn
) => {
    const response = await fetch(
        `${config.auth.url}/auth/tokens`, {
            method : "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                id,
                password
            })
        }
    );

    if (!response.ok) {
        if (response.status === 403) {
            const x = await response.json();
            throw new Error(x.result);
        } else {
            throw response;
        }
    }

    return (await response.json()) as Credential;
};
