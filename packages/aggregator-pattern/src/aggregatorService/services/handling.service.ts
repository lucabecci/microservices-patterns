import axios from 'axios'
import { InterfaceInputLogin, InterfaceInputRegister, InterfaceOutputLogin, InterfaceOutputRegister } from '../interfaces/handling.interfaces'

class HandlingService {
    public async login(data: InterfaceInputLogin): Promise<InterfaceOutputLogin> {
        const resp = await axios.post("x-url", data)
        if(resp.status != 200){
            return new Error
        }

        return resp.data
    }

    public async register(data: InterfaceInputRegister): Promise<InterfaceOutputRegister> {
        const resp = await axios.post("x-url", data)
        if(resp.status != 200){
            return new Error
        }

        return resp.data
    }
}

export default HandlingService