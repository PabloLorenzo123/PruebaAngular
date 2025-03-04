import { Component, input, inject, Output, signal, computed } from '@angular/core';

import { ProductService } from '../../services/product.service';

import {map, pipe, of, catchError} from 'rxjs';

import { NgClass } from '@angular/common';

import { Product } from '../../model/product.type';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'product',
  imports: [NgClass],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  productData = input.required<Product>();
  postRequestStatus = signal('');

  className = computed(() => {
    // Determine the class value for the element, to style it accordingly.
    switch (this.postRequestStatus()){
        case 'success':
          return 'success'
        case 'failure':
          return 'failure'
        default:
          return 'undefined'
    }
  })

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private auth: AuthService) {}

  sendPostRequest(){
    // Makes an api call to the api to create a product. if the request is succesful update
    // the productRequestStatus property according to the request response.
    const developerName: string = this.auth.getUsername();

    this.productService
      .sendPostRequest(developerName, this.productData().name)
      .pipe(
        // map(() => true),
        catchError((err) => {
          console.log(err);
          this.toastr.error(err?.error.message ? err.error.message: 'Hubo un error.');
          return of(false)
      }),
      ).subscribe((res: any) => {
        console.log(res);
        if (res){
          console.log(res)
          this.toastr.success(res?.message);
          this.postRequestStatus.set('success')
        } else {
          this.postRequestStatus.set('failure');
        }
      })
  }

}
