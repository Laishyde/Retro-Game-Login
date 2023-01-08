import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-250px)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateY(220px)' })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0, transform: 'translateY(200px)' })),
      ]),
    ]),

    trigger('fadeSlideInOutLuz', [
      transition(':enter', [
        style({ opacity: 0, }),
        animate('7000ms', style({ opacity: 1, })),
      ]),
      transition(':leave', [
        animate('2000ms', style({ opacity: 0, })),
      ]),
    ]),
    trigger('fadeSlideInOutBola', [
      transition(':enter', [
        style({ opacity: 0, }),
        animate('10000ms', style({ opacity: 1, })),
      ]),
      transition(':leave', [
        animate('9000ms', style({ opacity: 0, })),
      ]),
    ]),
  ],

})
export class LandingPageComponent implements OnInit {
  showLuz = true;
  constructor(
    private stateService: StateService,
  ) { }

  ngOnInit(): void {
    setTimeout(this.acenderLuz, 1200);
    setTimeout(this.acenderBola, 3200);
  }

  acenderLuz() {
    document.getElementById('ima').style.visibility = "visible";
  }

  acenderBola() {
    document.getElementById('bola').style.visibility = "visible";
  }

  goHome() {
    this.stateService.go('home', {}, { location: false });
  }
}
