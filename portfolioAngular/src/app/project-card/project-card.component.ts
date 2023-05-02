import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/models/projects';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }
  @Input()
  project!: Project;
  myStyle = {};
  ngOnInit() {
    
    
    this.myStyle = { 'flex-direction': this.project.position}
  }

}
