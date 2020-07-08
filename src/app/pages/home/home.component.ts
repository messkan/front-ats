import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/utils/services/home.service';
import { Produit } from 'src/app/models/Produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produits : Produit[];
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {

    this.homeService.getProducts(1).subscribe((res) => {
      this.produits = res;
   }, (err) => {
      console.log(err);
    })

  }

  avg(produit) {
    console.log(produit.reviews.length);
    let moy = 0;
    produit.reviews.forEach(element => {
      moy += element.rating;
    });
    return (moy / produit.reviews.length)
  }



}
