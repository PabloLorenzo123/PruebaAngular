import { Component, input, inject, Output, signal, computed } from '@angular/core';

import { CoveragesService } from '../../services/coverages.service';

import {map, pipe, of, catchError} from 'rxjs';

import { NgClass } from '@angular/common';

import { Coverage } from '../../model/coverage.type';

@Component({
  selector: 'product',
  imports: [NgClass],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  coveragesService = inject(CoveragesService);

  productData = input.required<Coverage>();
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

  sendPostRequest(){
    // Makes an api call to the api to create a product. if the request is succesful update
    // the productRequestStatus property according to the request response.
    this.coveragesService
      .sendPostRequest('Pablo', this.productData.name)
      .pipe(
        // map(() => true),
        catchError((err) => {
          console.log(err);
          alert(err?.error.message ? err.error.message: err.statusText);
          return of(false)
      }),
      ).subscribe((res: any) => {
        console.log(res);
        if (res){
          console.log(res)
          alert(res?.message);
          this.postRequestStatus.set('success')
        } else {
          this.postRequestStatus.set('failure');
        }
      })
  }

}
