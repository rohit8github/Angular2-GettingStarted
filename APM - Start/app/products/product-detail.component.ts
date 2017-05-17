import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import {IProduct} from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit,OnDestroy {
    pageTitle: string ='Product Detail';
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route:ActivatedRoute, private _router:Router,private _productService:ProductService){

    }

    ngOnInit(): void{
        // console.log(this._route.snapshot.params['id']);
        // let id= +this._route.snapshot.params['id'];
        // this.pageTitle +=`: ${id}`;
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }
    ngOnDestroy():void{
        this.sub.unsubscribe();
    }
    getProduct(id:number){
        this._productService.getProduct(id).subscribe(
            item=>this.product=item,
            error=>this.errorMessage=<any>error
        );
    }
    onBack() :void{
        this._router.navigate(['/products']);
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}