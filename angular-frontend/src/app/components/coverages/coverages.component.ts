import { Component, inject, OnInit, signal } from '@angular/core';
import { CoveragesService } from '../../services/coverages.service';
import { Coverage } from '../../model/coverage.type';
import { catchError } from 'rxjs';

interface CoverageItem extends Coverage {
  available: boolean | undefined;
}

@Component({
  selector: 'coverages',
  imports: [],
  templateUrl: './coverages.component.html',
  styleUrl: './coverages.component.scss'
})
export class CoveragesComponent implements OnInit {
  coveragesService = inject(CoveragesService);
  coverages = signal<Array<CoverageItem>>([]);

  async checkCoverage(productName: string) {
    const successful: boolean = await this.coveragesService.checkCoverage('Pablo', productName);
    console.log(`succesful = ${successful}`)
    if (successful){
      // Update the coverage available property.
      this.coverages.update(prev => prev.map(c => 
        c.name === productName ? { ...c, available: successful } : c
      ));
    }
  }

  ngOnInit(): void {
      // this.coverages.set(this.coveragesService.getCoverages().map(c => ({
      //   ...c,
      //   available: false // Initially false, this will be determined by checkCoverage().
      // })));

      this.coveragesService.getCoverages()
        .pipe(
          catchError((err) => {
            console.log(err);
            throw err;
          })
        ).subscribe(allCoverages => {
          this.coverages.set(allCoverages.map(c => ({...c, available: undefined})))
        })
  }


}
