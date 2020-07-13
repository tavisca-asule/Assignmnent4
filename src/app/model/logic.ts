import {Product} from './app.product.model';
import { Injectable } from '@angular/core';
// import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Injectable({
    providedIn: 'root',
  })

export class Logic {
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>();
    }

    getProducts(): Array<Product> {
        this.products.push(new Product(1, 'Prd001', 'Laptop', 'Electronics', 'HP', 'Gaming', 120000));
        this.products.push(new Product(2, 'Prd002', 'Iron', 'Electrical', 'Bajaj', 'Cotton Friendly', 3000));
        this.products.push(new Product(3, 'Prd003', 'Biscuts', 'Food', 'Parle', 'Glucose', 10));
        return this.products;
    }

    addProduct(prd: Product) : Array<Product> {
            this.products.push(prd);
        return this.products;
    }

    

    // deleteProduct() : string {      
    //     let msg : string;
    //     // let toDelete : number;
    //     // let prd = getProductToDelete();
    //     // toDelete = this.getProductIndex(prd.ProductId);
        
    //     // if(toDelete>-1 && toDelete<=this.products.length)
    //     // {
    //     //     this.products.splice(toDelete,1);
    //     //     msg = "Product Successfully Deleted";
    //     // }
    //     // else
    //     // {
    //     //     msg = "Product Not Found";
    //     // }
    //     return "msg";
    // }

    // getProductIndex(productId : string) : number
    // {
    //     let index =  -1;
    //     if(this.products!=undefined && this.products.length > 0)
    //     {
    //         this.products.forEach((n:Product, i:number)=> {
    //             if(n.ProductId == productId)
    //             {                 
    //                 index = i;                 
    //             }
    //         });
    //     }
    
    //     return index;
    // }
}

