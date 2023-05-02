import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Aptitud, Aptitudes } from 'src/models/aptitud';
import { Certificate, Certificates } from 'src/models/certificate';
import { Project, Projects } from 'src/models/projects';

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
  projects: Project[] = Projects;

  @ViewChild('masterHead') masterHead!: ElementRef;
  @ViewChild('head') head!: ElementRef;
  ngOnInit() {
    this.onResize();
    window.addEventListener('scroll', this.scroll, true);
    this.typingCallback(this);

  }

  public typewriter_text: string =
    "Alejo Fontao";
  public typewriter_display: string = "";

  typingCallback(that: any) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 80, that);
    }
  }



  scroll = (): void => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= 600) {
      this.masterHead.nativeElement.classList.add('fixed');
      this.head.nativeElement.classList.add('alternate-scroll');
    } else {
      this.masterHead.nativeElement.classList.remove('fixed');
      this.head.nativeElement.classList.remove('alternate-scroll');
    }
  };

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenSize = (window.innerWidth <= 900) ? true : false;
  }
}


