import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-params',
  templateUrl: './token-params.component.html',
  styleUrls: ['./token-params.component.css']
})
export class TokenParamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
    message: string;
    token: string;
    emp: string

}
