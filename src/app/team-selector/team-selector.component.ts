import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss']
})
export class TeamSelectorComponent {
  @Output() teamSelected: EventEmitter<string> = new EventEmitter<string>();

  selectTeam(team: string) {
    this.teamSelected.emit(team);
  }
}