import { Ability } from "./ability"

export class Champion {
    name: string
    overview: string
    quota: string
    abilities: Array<Ability>

    constructor(
        name: string = 'Yone',
        overview: string = 'nerfing his mana',
        quota: string = "He's overpowered",
        abilities: Array<Ability> = [new Ability]
        ) {
        this.name = name
        this.overview = overview
        this.quota = quota
        this.abilities = abilities
    }
}