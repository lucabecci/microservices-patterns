import express, { Request, Response } from 'express'
import middlewares from './utils/middlewares'

const app = express()

function entrypoint(){
    app.use(express.json())
    app.use(express.urlencoded({extended: false, limit: "50mb"}))
    app.use(middlewares.manOfTheMiddle)
    app.get('/', function(_req: Request, res: Response): Response {
        return res.status(200).json({
            ok: true,
            message: "Index of API"
        })
    })


    app.listen(8080, function(){
        console.log("Service running in:", 8080)
    })

}

export default entrypoint