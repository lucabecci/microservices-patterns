import express, { Application } from "express";
import Middlewares, { MiddlewaresInterface } from '../common/utils/middlewares'
import HandlingRouter from './routes/handling.routes'
class Entrypoint {
    private _server: Application
    private _middlewares: MiddlewaresInterface
    private _handlingRouter: HandlingRouter
    constructor(){
        this._server = express()
        this._middlewares = new Middlewares
        this._handlingRouter = new HandlingRouter
    }

    private _confMiddleawres(): void {
        this._server.use(express.json())
        this._server.use(express.urlencoded({extended: false, limit: "50mb"}))
        this._server.use(this._middlewares.manOfTheMiddle)
    }

    private _confRouters(): void {
        this._server.use('/', this._handlingRouter.instance())
    }

    public run(): void {
        this._confMiddleawres()
        this._confRouters()
        this._server.listen(4000, function(){
            console.log("Aggregator service running in:", 4000)
        })
    }
}

export default Entrypoint