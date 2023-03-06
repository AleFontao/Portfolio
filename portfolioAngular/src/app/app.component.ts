import { Component, HostListener, OnInit } from '@angular/core';
import { Aptitud, Aptitudes } from 'src/models/aptitud';
import { Certificate, Certificates } from 'src/models/certificate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolioAngular';
  showFiller = false;
  screenSize = false;
  aptitudes: Aptitud[] = Aptitudes;
  certifications: Certificate[] = Certificates;
  ngOnInit() {
    this.onResize();
    
    
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenSize = (window.innerWidth <= 900) ? true : false;
  }
}


