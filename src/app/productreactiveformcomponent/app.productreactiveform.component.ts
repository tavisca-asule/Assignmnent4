import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


import {Product} from '../model/app.product.model';
import { Logic } from '../model/logic';
import {Categories, Manufacturers} from '../model/app.constants';
import {CustomValidator} from './app.custom.validators';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-productreactiveform-component',
  templateUrl: './app.productreactiveform.view.html'
})
export class ProductReactiveFormComponent implements OnInit {

  product: Product;
  products: Array<Product>;
  private logic: Logic;
  headers: Array<string>;

  // copy the constant arrays in local public arrays of the component
  categories = Categories;
  manufacturers = Manufacturers;

  // define a FormGroup
  frmProduct: FormGroup;

  constructor(){
    this.product = new Product(0, '', '', '', '', '', 0);
    this.products = new Array<Product>();
    this.logic = new Logic();
    this.headers = new Array<string>();

    // map the Product Model class to FormGroup using FormControl
    // bind the fromProduct to <form> tag using its
    // [formGroup] attribute
    // bind the 'key' of FormControlName to Editable elements
    // inside formGroup using [formControlName] attribute

    this.frmProduct = new FormGroup({
                                       // the value of the Model property
                                       // to be read/write for the UI element
                                       // aka formState
       ProductRowId : new FormControl(this.product.ProductRowId,
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(8),
            Validators.pattern('[0-9]+'),
            CustomValidator.CheckEven
          ])),
       ProductId : new FormControl(this.product.ProductId,
         Validators.compose([
            Validators.required
         ])),
       ProductName : new FormControl(this.product.ProductName),
       CategoryName : new FormControl(this.product.CategoryName),
       Manufacturer : new FormControl(this.product.Manufacturer),
       Description : new FormControl(this.product.Description),
       BasePrice : new FormControl(this.product.BasePrice,
         Validators.compose([
            Validators.required,
            CustomValidator.CheckPositiveValue
         ])),
        SortByPrice : new FormControl(this.product.BasePrice),
        SortByName : new FormControl(this.product.ProductName)
    });

  }

  // this is method that will be invoked immediatly after the ctor execution
  // write the logic in this method that we cannot write in the ctor
  // e.g. External Service calls, long running iterations
   ngOnInit(): void {
    // read proeprties of Product class and add them in headers array

    for(let p in this.product) {
       this.headers.push(p);
    }
    this.products = this.logic.getProducts();

   }

   clear(): void {
    this.product = new Product(0, '', '', '', '', '', 0);
   }
   save(): void {

    // read value from FormControl received from FromGroup
    this.product = this.frmProduct.value;
    this.products = this.logic.addProduct(this.product);
    console.log(JSON.stringify(this.products));
   }

   getSelectedRecord(prd: Product): void {
      // set the value to FormGroup
      this.frmProduct.setValue(prd);
   }

   //  delete(): void{
   //     let msg = this.logic.deleteProduct();
   //     console.log(msg);
   //   }

   //  getProductToDelete() : Product
   //  {
   //     console.log(this.frmProduct.getRawValue());
   //     return this.frmProduct.getRawValue();
   //  }

    validateProductId():void{
         alert("tab");
         CustomValidator.IsValidProduct;
      }

      sortLowest():void{
         this.products.sort((a:Product , b: Product) => this.GetLowestSort(a,b));
      }
      sortHighest():void{
         this.products.sort((a:Product , b: Product) => this.GetHighestSort(a,b));
      }
      sortAccending():void{
         this.products.sort((a:Product , b: Product) => this.GetAccending(a,b));
      }
      sortDecending():void{
         this.products.sort((a:Product , b: Product) => this.GetDecending(a,b));
      }
      GetLowestSort(a:Product,b:Product): number{
         if(a.BasePrice < b.BasePrice)
          return -1;
         else 
          return 0;
      }
      GetHighestSort(a:Product,b:Product): number{
         if(a.BasePrice > b.BasePrice)
          return -1;
         else 
          return 0;
      }
      GetAccending(a:Product,b:Product): number{
         if(a.ProductName < b.ProductName)
          return -1;
         else 
          return 0;
      }
      GetDecending(a:Product,b:Product): number{
         if(a.ProductName > b.ProductName)
          return -1;
         else 
          return 0;
      }
}
