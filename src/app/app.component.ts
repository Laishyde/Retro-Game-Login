import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'retro-game';

  constructor(
    private stateService: StateService,
  ) { }

  ngOnInit() {
    this.stateService.go('landing-page', {}, { location: false });
  }
}
