import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.css'],
  providers: [ DataService ]
})
export class ProductsCatalogComponent implements OnInit {
  private products:any = [];
  constructor(private dataService: DataService) {
    this.dataService.getProducts().then((data)=>{
      this.products = data["products"];
    });
  }

  ngOnInit() {
  }

}
