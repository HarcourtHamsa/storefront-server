import { NextFunction, Request, Response } from "express";

async function logout(req: Request, res: Response, next: NextFunction) {
    req.session.destroy((error) => {
        if(error) console.log("Error destroying session: ", error)

        res.clearCookie(process.env.SESSION_NAME!)

        res.json({
            message: "Logged out successfully"
        })
       
    })
}

export default logout
    
