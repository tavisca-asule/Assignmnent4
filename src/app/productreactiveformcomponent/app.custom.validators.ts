import { AbstractControl } from '@angular/forms';
import { Logic } from '../model/logic';

export class CustomValidator {
   static CheckEven(ctrl: AbstractControl): any {
     // tslint:disable-next-line: radix
     const value: number = parseInt(ctrl.value);
     if (value % 2 === 0) {
        return null; // valid
     } else {
       return {odd: true}; // invalid
     }
   }

   static CheckPositiveValue(ctrl: AbstractControl) : any {
      const value:number = parseInt(ctrl.value);
      if(value<0)
      {
        return {negative:true};
      }
   }

   static IsValidProduct(ctrl:AbstractControl) : any {
        alert("In IsValidProduct");
        let isInValidProductId : boolean = false;
        let logic:any = new Logic();
        let prd : any = logic.getProducts();
        for(let i=0;i<prd.length;i++)
        {
            if(ctrl.value.toString() === prd[i].ProductId.toString()) 
            {   
              isInValidProductId = true;           
              break;
            }
        }
        return {isInValidProductId:null};
    }
}
