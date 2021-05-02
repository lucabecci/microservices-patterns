import express, { Application } from "express";
import Middlewares, { MiddlewaresInterface } from '../common/utils/middlewares'
import UserRouter from "./routes/user.routes";
class Entrypoint {
    private _server: Application
    private _middlewares: MiddlewaresInterface
    private _userRouter: UserRouter
    constructor(){
        this._server = express()
        this._middlewares = new Middlewares
        this._userRouter = new UserRouter
    }

    private _confMiddleawres(): void {
        this._server.use(express.json())
        this._server.use(express.urlencoded({extended: false, limit: "50mb"}))
        this._server.use(this._middlewares.manOfTheMiddle)
    }

    private _confRouters(): void {
        this._server.use('/auth', this._userRouter.instance())
    }


    public run(): void {
        this._confMiddleawres()
        this._confRouters()
        this._server.listen(4003, function(){
            console.log("User service running in:", 4003)
        })
    }
}

export default Entrypoint