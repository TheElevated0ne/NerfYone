export class AbilityChange {
    change: string
    before: string
    after: string

    constructor(
        change: string = 'Mana cost',
        before: string = '10/20/30/40/50',
        after: string = '40 at all ranks'
    ) {
        this.change = change
        this.before = before
        this.after = after
    }
}