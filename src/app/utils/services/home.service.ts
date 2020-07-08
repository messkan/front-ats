import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/models/Produit';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  url = environment.apiUrl; 
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    
    }),
  };

  constructor(private http :HttpClient) { }

  getProducts(page : Number ): Observable<Produit[]>{

    return this.http.get<Produit[]>(this.url + "/products?page="+page, this.httpOptions) ; 
   
  }

  productById(id: String) : Observable<Produit>{ 
    return this.http.get<Produit>(this.url+ "/products/" + id , this.httpOptions);
  }

}
