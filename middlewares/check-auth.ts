import { NextFunction, Request, Response } from "express";

async function checkAuth(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.session as any

    if (!userId) {
        return res.status(401).json({
            message: "Not authenticated"
        })
    }

    next()
}

export default checkAuth