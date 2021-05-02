import { NextFunction, Request, Response } from "express";
import { getToken } from "./functions";

export class MiddlewaresInterface {
    manOfTheMiddle: (req: Request, _res: Response, next: NextFunction) => void 
    transferToken: (req: Request, res: Response, next: NextFunction) => any
}

class Middlewares implements MiddlewaresInterface{
    public manOfTheMiddle(req: Request, _res: Response, next: NextFunction): void {
        const man = req.ip
        console.log(man)
        next()
    }

    public transferToken(req: Request, res: Response, next: NextFunction): any {
        const token = req.headers.token
        if(token === getToken()){
            console.log("Valid token")
            next()
            return
        }
        return res.status(400).json({
            ok: false,
            message: "False token server connection"
        })
    }
}


export default Middlewares