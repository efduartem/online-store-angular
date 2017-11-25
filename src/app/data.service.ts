import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http : Http) { }

  getProducts(){
    let promesa = new Promise((resolve, reject)=>{
      this.http.get('https://online-store-nextu.firebaseio.com/productos.json')
          .subscribe(
            (data: Response) => {
              resolve({products: JSON.parse(data["_body"])});
          }
        )
    })

    return promesa;
  }

}