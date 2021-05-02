import express, { Application, Request, Response } from "express";
import Middlewares, { MiddlewaresInterface } from '../common/utils/middlewares'
class Entrypoint {
    private _server: Application
    private _middlewares: MiddlewaresInterface
    constructor(){
        this._server = express()
        this._middlewares = new Middlewares
    }

    private _confMiddleawres(): void {
        this._server.use(express.json())
        this._server.use(express.urlencoded({extended: false, limit: "50mb"}))
        this._server.use(this._middlewares.manOfTheMiddle)
    }

    private _confRouters(): void {
        this._server.get('/', function(_req: Request, res: Response): Response {
            return res.status(200).json("Welcome")
        })
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