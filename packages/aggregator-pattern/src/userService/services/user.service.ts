import { InterfaceLoginInput, InterfaceLoginOutput, InterfaceRegisterInput, InterfaceRegisterOutput, InterfaceUser } from "../interfaces/user.interfaces"

class UserService {
    private users: InterfaceUser[]
    constructor(){
        this.users = []
    }

    public register(data: InterfaceRegisterInput): InterfaceRegisterOutput {
        const user: InterfaceUser = {
            email: data.email,
            password: data.password
        }

        this.users.push(user)

        return {
            ok: true,
            message: "User saved"
        }
    }

    public login(data: InterfaceLoginInput): InterfaceLoginOutput{
        let response: InterfaceLoginOutput = {
            ok: false,
            message: `Error to login`
        }
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if(user.email === data.email){
                response = {
                    ok: true,
                    message: `Welcome ${user.email}`
                }
            }else{
                continue;
            }
        }
        return response
    }
}

export default UserService