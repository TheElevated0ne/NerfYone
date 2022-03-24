import { AbilityChange } from "./abilitychange"

export class Ability {
    ability_id: string
    achange: Array<AbilityChange>

    constructor(
        ability_id: string = 'Q',
        achange: Array<AbilityChange> = [new AbilityChange]
        ) {
        this.ability_id = ability_id
        this.achange = achange
        }
}