import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Patch } from './patch';

export interface Message {
  patch: Patch;
  time: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatchingService {

  constructor(private realtimeDb: AngularFireDatabase) { }

  getRealTimeDbMessages(): Observable<any> {
    return this.realtimeDb.list<Message>('wall').valueChanges()
  }

  sendPatch(patch: Patch) {
    const currTime = Number(new Date())
    const readableTime = new Date(currTime).toLocaleTimeString()
    const readableDate = new Date(currTime).toDateString()

    this.realtimeDb.list<Message>('wall').push({patch, time: readableTime, date: readableDate})

    this.realtimeDb.object('wall').update({'last updated at': currTime})
  }
}
