import { NextFunction, Request, Response } from "express";

export interface MiddlewaresInterface {
    manOfTheMiddle: (req: Request, _res: Response, next: NextFunction) => void 
}

class Middlewares implements MiddlewaresInterface{
    public manOfTheMiddle(req: Request, _res: Response, next: NextFunction): void {
        const man = req.ip
        console.log(man)
        next()
    }
}

export default Middlewares