import { Component, NgIterable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patch } from 'src/app/services/patch';
import { Message, PatchingService } from 'src/app/services/patching.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  allMessages: Observable<NgIterable<Message>>

  constructor(private realtimeDb: PatchingService) {
    this.allMessages = realtimeDb.getRealTimeDbMessages()
  }

  sendPatch(patch: Patch) {
    this.realtimeDb.sendPatch(patch)
  }

  ngOnInit(): void {
  }

}
