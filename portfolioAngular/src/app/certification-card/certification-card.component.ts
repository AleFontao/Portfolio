import { Component, Input, OnInit } from '@angular/core';
import { Certificate } from 'src/models/certificate';

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.scss']
})
export class CertificationCardComponent implements OnInit {
  @Input() 
  certificate:Certificate|any;

  constructor() { }
 
  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-certification-animation');
        }
      });
    });
    document.querySelectorAll('.card-certification').forEach(element => {
      observer.observe(element);
    })

    console.log(this.certificate)
  }

}
