import Entrypoint from "./entrypoint";

class Main{
    private _entrypoint: Entrypoint

    constructor(){this._entrypoint = new Entrypoint}

    public start(): void {
        this._entrypoint.run()
    }
}

const main = new Main

main.start()