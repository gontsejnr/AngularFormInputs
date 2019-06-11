import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
firstName: string ='';
lastName: string ='';
gender: string ='';
age: number;
phoneNumber: number;
race: string='';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onRegister(){
    this.router.navigate(['/detail'],{queryParams:{firstName: this.firstName, lastName: this.lastName, gender: this.gender, age: this.age,
       phoneNumber: this.phoneNumber, race: this.race}})
  }

}
