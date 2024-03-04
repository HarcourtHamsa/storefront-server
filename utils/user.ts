import { Request } from "express";
import { Session } from "express-session";

interface CustomSession extends Session {
    userId: string
}

export const getUser = (req: Request) => {
    const userId = (req.session as CustomSession).userId
    return { userId }
}