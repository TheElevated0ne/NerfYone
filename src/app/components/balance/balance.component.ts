import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/services/ability';
import { AbilityChange } from 'src/app/services/abilitychange';
import { Champion } from 'src/app/services/champion';
import { Patch } from 'src/app/services/patch';
import { PatchingService } from 'src/app/services/patching.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  patchname: string = 'My Patch'
  champions: Array<Champion> = [
    new Champion
  ]
  patch: Patch = new Patch(this.patchname, this.champions)

  constructor(private realtimeDb: PatchingService) { }

  ngOnInit(): void {
  }

  addChampion() {
    this.champions.push(
      new Champion(
        'Yasuo', 'nerfing his damage', 'We dont like him',
        [
          new Ability('E', [new AbilityChange('Damage', '30/40/50/70/90', '10/11/12/13/14')])
        ])
    )
  }

  removeChampion(champ: Champion) {
    this.champions.splice(this.champions.indexOf(champ), 1)
  }

  addAbility(champion: Champion) {
    champion.abilities.push(new Ability)
  }

  removeAbility(champion: Champion, ability: Ability) {
    champion.abilities.splice(champion.abilities.indexOf(ability), 1)
  }

  addAbilityChange(ability: Ability) {
    ability.achange.push(new AbilityChange)
  }

  removeAbilityChange(ability: Ability, change: AbilityChange) {
    ability.achange.splice(ability.achange.indexOf(change), 1)
  }

  // not using eval() for security reasons
  onKey(target: any , value: string, child: string) {
    if (child === 'name') {
      target.name = value
    }
    if (child === 'overview') {
      target.overview = value
    }
    if (child === 'quota') {
      target.quota = value
    }
    if (child === 'patchName') {
      target = value
    }
    if (child === 'abilityID') {
      target.ability_id = value
    }
    if (child === 'change') {
      target.change = value
    }
    if (child === 'before') {
      target.before = value
    }
    if (child === 'after') {
      target.after = value
    }
  }

  submit() {
    this.realtimeDb.sendPatch(this.patch)
  }
}
