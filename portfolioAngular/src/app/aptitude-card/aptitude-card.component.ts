import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Aptitud } from 'src/models/aptitud';

@Component({
  selector: 'app-aptitude-card',
  templateUrl: './aptitude-card.component.html',
  styleUrls: ['./aptitude-card.component.scss'],
  animations: [
    trigger('enterState', [
      state('void', style({
        opacity: 0,

      })),
      transition(':enter', [
        animate(8000, style({
          opacity: 1,

        }))
      ])
    ])
  ]
})
export class AptitudeCardComponent implements OnInit {
  @Input()
  aptitud!:Aptitud;
  constructor() { }

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-animation');
        }
      });
    });
    document.querySelectorAll('.card').forEach(element => {
      observer.observe(element);
    })
  }



}
