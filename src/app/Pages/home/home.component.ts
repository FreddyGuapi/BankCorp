import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count: number = 0;
  branchOfficeCount: number = 0;

  countStop: any = setInterval(() => {
    this.count++;
    if (this.count == 26) {
      clearInterval(this.countStop);
    }
  }, 100)

  branchOfficeCountStop: any = setInterval(() => {
    this.branchOfficeCount++;
    if (this.branchOfficeCount == 19) {
      clearInterval(this.branchOfficeCountStop);
    }
  }, 100)

  constructor() { }

  ngOnInit(): void {
  }

}
