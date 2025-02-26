import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.type';
import { catchError, map, of } from 'rxjs';
import { ProductComponent } from '../product/product.component';
import { ToastrService } from 'ngx-toastr';

interface CoverageItem extends Product {
  available: boolean | undefined;
}

@Component({
  selector: 'coverages',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductList implements OnInit {
  coverages = signal<Array<CoverageItem>>([]);

  constructor(private productService: ProductService, private toast: ToastrService){}

  ngOnInit(): void {
    this.productService
      .getCoverages()
      .pipe(
        catchError((err) => {
          this.toast.error(err?.error.message ? err.error.message: 'Hubo un error, asegurese que el backend esté corriendo.');
          throw err;
        }),
      )
      .subscribe((allCoverages) => {
        this.coverages.set(allCoverages.map((c) => ({ ...c, available: undefined })));
      });
  }

}
