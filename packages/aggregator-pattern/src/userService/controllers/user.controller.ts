import { Request, Response } from "express";
import { InterfaceUser } from "../interfaces/user.interfaces";
import UserService from '../services/user.service'
class UserController {
    private _userService: UserService

    constructor(){
        this._userService = new UserService
    }

    public register(req: Request, res: Response): Response{
        const toRegister: InterfaceUser = {
            email: req.body.email,
            password: req.body.password
        }
        const resp = this._userService.register(toRegister)

        return res.status(200).json({
            ok: resp.ok,
            message: resp.message
        })
    }

    public login(req: Request, res: Response): Response {
        const toLogin: InterfaceUser = {
            email: req.body.email,
            password: req.body.password
        }

        const resp = this._userService.login(toLogin)

        return res.status(200).json({
            ok: resp.ok,
            message: resp.message
        })
    }
}

export default UserController