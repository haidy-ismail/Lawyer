import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';
// import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-what-do',
  templateUrl: './what-do.component.html',
  styleUrls: ['./what-do.component.css']
})
export class WhatDoComponent {

  constructor(
     public directionService: DirectionService,
  ){}

}
