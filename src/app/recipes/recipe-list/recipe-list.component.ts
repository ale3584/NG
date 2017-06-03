import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      ' This is a test',
      'http://www.seriouseats.com/recipes/assets_c/2016/06/20160623-cubano-roast-pork-sandwich-recipe-19-thumb-1500xauto-432791.jpg'),
    new Recipe('A Test Recipe 2',
      ' This is a test',
      'http://www.seriouseats.com/recipes/assets_c/2016/06/20160623-cubano-roast-pork-sandwich-recipe-19-thumb-1500xauto-432791.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
