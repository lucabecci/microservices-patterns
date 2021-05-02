import { Request, Response } from "express";

class HandlingController {
    public index(_req: Request, res: Response): void {
        res.status(200).json({
            ok: true,
            message: "handling of aggregato service"
        })
    }
}

export default HandlingController