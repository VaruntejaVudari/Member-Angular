import { Component, OnInit } from '@angular/core';
import MemberRegistration from '../entity/MemberRegistration';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  member: MemberRegistration = new MemberRegistration();
  save() {
    const observable = this.registrationservice.createMember(this.member);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
        alert('somethimg Went Wrong Please Try Again');
      }
    );

  }
  
  constructor(public registrationservice: RegistrationService) {}

  ngOnInit(): void {}
}
