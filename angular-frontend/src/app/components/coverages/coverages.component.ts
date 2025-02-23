import { Component, inject, OnInit, signal } from '@angular/core';
import { CoveragesService } from '../../services/coverages.service';
import { Coverage } from '../../model/coverage.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'coverages',
  imports: [],
  templateUrl: './coverages.component.html',
  styleUrl: './coverages.component.scss'
})
export class CoveragesComponent implements OnInit {
  coveragesService = inject(CoveragesService);
  coverages = signal<Array<Coverage>>([]);

  ngOnInit(): void {
      this.coverages.set(this.coveragesService.getCoverages());
      // this.coveragesService.getCoverages()
      //   .pipe(
      //     catchError((err) => {
      //       console.log(err);
      //       throw err;
      //     })
      //   ).subscribe(c => {
      //     this.coverages.set(c)
      //   })
  }


}
