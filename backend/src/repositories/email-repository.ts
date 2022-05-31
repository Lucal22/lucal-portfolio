export interface EmailCreateData{
    name?: string;
    email: string;
    subject?: string;
    message: string;
}

export interface EmailRepository{
    create: (data: EmailCreateData) => Promise<void>;
}

