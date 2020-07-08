import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/utils/services/home.service';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/Produit';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: Produit;
  public id: String;
  private routeSub: Subscription;
  constructor(private homeService: HomeService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.homeService.productById(this.id).subscribe((res) => {
        this.product = res ;
      }, (err) => { 
        console.log(err);
      })
    });

    
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
