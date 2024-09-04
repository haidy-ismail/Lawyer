import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-companies-field',
  templateUrl: './companies-field.component.html',
  styleUrls: ['./companies-field.component.css']
})
export class CompaniesFieldComponent {

  constructor(public directionService: DirectionService){}

}
