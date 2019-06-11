import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() firstName;
  @Input() lastName;
  @Input() gender;
  @Input() age;
  @Input() phoneNumber;
  @Input() race;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {console.log(params);
    
    this.firstName = params.firstName,
    this.lastName = params.lastName,
    this.gender = params.gender,
    this.age = params.age,
    this.phoneNumber = params.phoneNumber,
    this.race = params.race,
  
    console.log(this.firstName, this.lastName, this.gender, this.age, this.phoneNumber, this.race);
  })
  }

}
