export interface InterfaceRegisterInput {
    email: string
    password: string
}  

export interface InterfaceRegisterOutput {
    ok: boolean
    message: string
}   

export interface InterfaceLoginInput {
    email: string
    password:string
}

export interface InterfaceLoginOutput {
    ok: boolean
    message: string
}

export interface InterfaceUser{
    email: string
    password: string
}