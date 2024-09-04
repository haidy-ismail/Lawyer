import { Component, inject, Injector } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router, RouterModule } from '@angular/router';
// import { NgToastService } from 'ng-angular-popup';
// import { ToastrService } from 'ngx-toastr';
// import { ContactService } from 'src/app/services/contact.service';
// import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
//   myContactForm: FormGroup;
//   private toastr: ToastrService | undefined;
//   router= inject(Router);
//   toast = inject(NgToastService)

//   constructor(private fb: FormBuilder, 
    // private contactService: ContactService ,  
    // private injector: Injector,public directionService: DirectionService ) {
    // this.myContactForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   phoneNumber: ['', Validators.required],
    //   message: ['', Validators.required],
    // });
//   }

  
//   onSubmitContact() {
//     if (this.myContactForm.valid) {
//       const newItem = this.myContactForm.value;
//       console.log('Form Values:', newItem); // Log form values
//       this.contactService.postContact(newItem).subscribe(
//         {
//           next: (response) => {
         
//             this.toast.success({detail:"SUCCESS",summary: "Message sent successfully", duration: 5000});
      
//           },
//           error: (error) => {
//             this.toast.error({detail:"ERROR",summary: "Something went wrong", duration: 5000});
           
//           },
//         }
//       );
//     } else {
//       this.getToastr().error('Form is invalid'); // Show error toast if form is invalid
//       console.error('Form is invalid');
//     }
//   }

//   submitForm(event: Event) {
//     event.preventDefault(); // Prevent default behavior
//     if (this.myContactForm.valid) {
//       this.onSubmitContact();
//     } else {
//       this.getToastr().error('Form is invalid'); // Show error toast if form is invalid
//       console.error('Form is invalid');
//     }
//   }


//   private getToastr(): ToastrService {
//     if (!this.toastr) {
//       this.toastr = this.injector.get(ToastrService); // Lazy load ToastrService
//     }
//     return this.toastr;
//   }
}
