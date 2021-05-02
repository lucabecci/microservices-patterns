import { Router, IRouter } from "express"

class UserRouter {
    private _router: IRouter

    constructor(){
        this._router = Router()
    }

    private _conf(): void {
        this._router.get('/')
    }

    public instance(): IRouter {
        this._conf()
        return this._router
    }
}

export default UserRouter