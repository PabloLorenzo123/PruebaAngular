import { Component, inject, OnInit, signal } from '@angular/core';
import { CoveragesService } from '../../services/coverages.service';
import { Coverage } from '../../model/coverage.type';
import { catchError, map, of } from 'rxjs';
import { ProductComponent } from '../product/product.component';

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
  coveragesService = inject(CoveragesService);
  coverages = signal<Array<CoverageItem>>([]);

  ngOnInit(): void {
    this.coveragesService
      .getCoverages()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      )
      .subscribe((allCoverages) => {
        this.coverages.set(allCoverages.map((c) => ({ ...c, available: undefined })));
      });
  }

}
