import { Component, inject, OnInit, signal } from '@angular/core';
import { CoveragesService } from '../../services/coverages.service';
import { Coverage } from '../../model/coverage.type';
import { catchError, map, of } from 'rxjs';
import { ProductComponent } from '../product/product.component';
import { ToastrService } from 'ngx-toastr';

interface CoverageItem extends Coverage {
  available: boolean | undefined;
}

@Component({
  selector: 'coverages',
  imports: [ProductComponent],
  templateUrl: './coverages.component.html',
  styleUrl: './coverages.component.scss',
})
export class CoveragesComponent implements OnInit {
  coverages = signal<Array<CoverageItem>>([]);

  constructor(private coveragesService: CoveragesService, private toast: ToastrService){}

  ngOnInit(): void {
    this.coveragesService
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
