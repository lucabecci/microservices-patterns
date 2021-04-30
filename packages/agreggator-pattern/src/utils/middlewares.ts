import { NextFunction, Request, Response } from "express";

const middlewares = {
    manOfTheMiddle: function(req: Request, _res: Response, next: NextFunction): void {
        const man = req.ip
        console.log(man)
        next()
    }
}

export default middlewares