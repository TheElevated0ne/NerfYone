import { Champion } from "./champion"

export class Patch {
    name: string
    champions: Array<Champion>

    constructor(name: string , champions: Array<Champion>) {
        this.name = name
        this.champions = champions
    }
}