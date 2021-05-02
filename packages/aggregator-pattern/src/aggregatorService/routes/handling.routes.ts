import { Router, IRouter } from "express"
import HandlingController from "../controllers/handling.controller"

class HandlingRouter {
    private _router: IRouter
    private _handlingController: HandlingController
    constructor(){
        this._router = Router()
        this._handlingController = new HandlingController
    }

    private _conf(): void {
        this._router.get('/', this._handlingController.index)
    }

    public instance(): IRouter {
        this._conf()
        return this._router
    }
}

export default HandlingRouter