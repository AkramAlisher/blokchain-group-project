import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Coffee} from "../../interfaces/coffee";
import {Offer} from "../../interfaces/offer";

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent implements OnInit {

  coffee: Coffee | undefined;
  offer: Offer = {
    weight: 1,
    count: 1,
    date: '',
  };
  step = 1;


  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getCoffee(+params.id);
    })
  }

  getCoffee(id: number) {
    this.apiService.getCoffeeById(id).subscribe(res => {
      console.log(res);
      this.coffee = res;
    })
  }

  checkStatus() {
    if (this.offer.status === 'в пути') {
      this.offer.status = 'доставлен';
    }
    if (this.offer.status === 'на комплектации') {
      this.offer.status = 'в пути';
    }
    if (!this.offer.status) {
      this.offer.status = 'на комплектации';
    }
  }
}
