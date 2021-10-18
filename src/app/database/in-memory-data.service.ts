import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import {Offer} from "../interfaces/offer";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const coffee = [
      {
        id: 1,
        title: 'Эфиопский кофе',
        img: 'assets/coffee1.jpg',
        description: 'Кофе из Эфиопии является экологически чистым органическим продуктом, который интересен самому широкому кругу любителей кофе. Популярными местными сортами являются Sidamo и Yirgacheffe. «Иргачеф» – сорт, который выращивают в южно-центральных регионах страны, обрабатывается мокрым способом, подвергается ферментации.'

      },
      {
        id: 2,
        title: 'Колумбийский кофе',
        img: 'assets/coffee2.jpg',
        description: 'Колумбийский кофе отличается высоким качеством и мягким сбалансированным вкусом с отчетливой кислинкой, фруктовыми, цитрусовыми и шоколадными нотками. По производству этого продукта Колумбия занимает третье место в мире, уступая только Бразилии и Вьетнаму, особенная гордость и «визитная карточка» страны – превосходная арабика.'

      },
      {
        id: 3,
        title: 'Необжаренный кофе',
        img: 'assets/coffee3.jpg',
        description: 'Необжаренный кофе в последнее время получил широкое признание и заслужил любовь многих гурманов, которые не боятся экспериментировать и познавать новые грани вкусоаромата напитка. Под необжаренным кофе подразумеваются кофейные зерна, которые не прошли стадию обжарки.'
      },
    ];
    const offers: Offer[] = [];
    return {offers, coffee};
  }
}