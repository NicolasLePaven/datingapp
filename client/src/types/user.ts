export type User = {
    id: string;
    displayName: string;
    email: string;
    token: string;
    imageUrl?: string;
}

export type LoginCreds = {
    email: string;
    passwod: string;
}

export type RegisterCreds = {
    email: string;
    displayName: string;
    passwod: string;
}