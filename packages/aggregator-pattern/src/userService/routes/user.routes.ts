import { Router, IRouter } from "express"
import UserController from "../controllers/user.controller"

class UserRouter {
    private _router: IRouter
    private _controller: UserController
    constructor(){
        this._router = Router()
        this._controller = new UserController
    }

    private _conf(): void {
        this._router.post('/login', this._controller.login)
        this._router.post('/register', this._controller.register)
    }

    public instance(): IRouter {
        this._conf()
        return this._router
    }
}

export default UserRouter