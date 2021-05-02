import axios from 'axios'
import { InterfaceInputLogin, InterfaceInputRegister, InterfaceOutputLogin, InterfaceOutputRegister } from '../interfaces/handling.interfaces'

class HandlingService {
    public static async login(data: InterfaceInputLogin): Promise<InterfaceOutputLogin> {
       try{
        const resp = await axios.post("http://localhost:4003/auth/login", data)
        if(resp.status != 200){
            return {
                ok: false,
                message: ""
            }
        }
        return resp.data
       }
       catch(e){
           return {
               ok: false,
               message: "Error to fetch"
           }
       }
    }

    public static async register(data: InterfaceInputRegister): Promise<InterfaceOutputRegister> {
        try{
            const resp = await axios.post("http://localhost:4003/auth/register", data)
            if(resp.status != 200){
                return {
                    ok: false,
                    message: resp.data.message
                }
            }
            return resp.data
        }
        catch(e){
            return {
                ok: false,
                message: "Error to fetch"
            }
        }
    }
}

export default HandlingService