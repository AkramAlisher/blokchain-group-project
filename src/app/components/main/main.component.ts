import { Component, OnInit } from '@angular/core';
import {Coffee} from "../../interfaces/coffee";
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  coffee: Coffee[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getCoffee();
  }

  getCoffee() {
    this.apiService.getCoffee().subscribe(res => {
      console.log(res);
      this.coffee = res;
    })
  }

}
