import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const POST_URL = 'http://localhost:8081/memberRegPortal/registerMemberPortalDetails';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  createMember(registration: {
  dob: string;
  name: string;
  address: string;
  state: string;
  country: string;
  email: string;
  pan: string;
  contactno: number;
  lgIpMac: string;
  lgIpMacUpd: string;
  username: string;
  password: string;

  })
  {
    return this.http.post(POST_URL, registration);
  }
  constructor(public http: HttpClient) { }
}

