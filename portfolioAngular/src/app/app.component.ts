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
    this.typingCallbackDot(this);
    setInterval(() => this.typingCallbackDot(this), 2000);
  }

  public typewriter_text: string =
    "Alejo Fontao"; 
  public typewriter_text_dot: string = "|";
  public typewriter_display: string = "";
  public typewriter_display_dot: string = "";

  typingCallback(that: any) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 80, that);
    }else{
      
    }
  }

  typingCallbackDot(that: any) {
    let total_length = that.typewriter_text_dot.length;
    let current_length = that.typewriter_display_dot.length;
    if (current_length < total_length) {
      that.typewriter_display_dot += that.typewriter_text_dot[current_length];
      setTimeout(that.typingCallbackDot, 1000, that);
    }else{
      that.typewriter_display_dot = "";
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


