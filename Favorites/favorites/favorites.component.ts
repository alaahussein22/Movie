import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
   isFavorite:boolean=true

  constructor() { }

onFavoriteClick(){
  this.isFavorite =! this.isFavorite;
  console.log(this.isFavorite);

}

  ngOnInit(): void {
  }

}
