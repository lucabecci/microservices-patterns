import { Request, Response } from "express";
import HandlingService from "../services/handling.service";

class HandlingController {

    public index(_req: Request, res: Response): void {
        res.status(200).json({
            ok: true,
            message: "handling of aggregato service"
        })
    }

    public async register(req: Request, res: Response): Promise<Response> {
        const toRegister = {
            email: req.body.email,
            password: req.body.password
        }

        const result = await HandlingService.register(toRegister)
        
        if(result.ok === false){
            return res.status(400).json({
                ok: result.ok,
                message: result.message
            })
        }

        return res.status(200).json({
            ok: result.ok,
            message: result.message
        })
    }
}

export default HandlingController