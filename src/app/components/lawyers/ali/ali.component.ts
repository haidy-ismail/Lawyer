import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ClientService } from 'src/app/services/client.service';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-ali',
  templateUrl: './ali.component.html',
  styleUrls: ['./ali.component.css']
})
export class AliComponent {
  myClientForm: FormGroup;


  constructor(public directionService: DirectionService ,
     private fb: FormBuilder, private clientService:ClientService,
     private toast: NgToastService
  ){

    this.myClientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  // onSubmitClient() {
  //   if (this.myClientForm.valid) {
  //     const newItem = this.myClientForm.value;
  //     console.log('Form Values:', newItem); // Log form values
  //     this.clientService.postClient(newItem).subscribe(
  //       {
  //         next: (response) => {
         
  //           this.toast.success({detail:"SUCCESS",summary: "You booked successfully", duration: 5000});
      
  //         },
  //         error: (error) => {
  //           this.toast.error({detail:"ERROR",summary: "Something went wrong", duration: 5000});
           
  //         },
  //       }
  //     );
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }

}
