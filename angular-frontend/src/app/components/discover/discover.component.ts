import { Component, inject, OnInit, signal } from '@angular/core';
import { DiscoverSectionService } from '../../services/discover-section.service';
import { discoverArticle } from '../../model/discoverArticle.type';

import { MatIconModule } from '@angular/material/icon';
import { MatIconService } from '../../services/mat-icon-service.service';

import { catchError } from 'rxjs';

@Component({
  selector: 'discover-section',
  imports: [MatIconModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent implements OnInit{
  discoverSectionService = inject(DiscoverSectionService);
  articles = signal<discoverArticle[]>([]);
  selectedDisplayOption = signal<string>('more-icon');

  displayOptionsIcons = {
    'more-icon': '/icons/more.svg',
    'grid-icon': '/icons/grid_view.svg',
    'circle-icon': '/icons/circle.svg',
  }

  constructor(private matIconService: MatIconService){
    this.matIconService.registerIcons(this.displayOptionsIcons);
    this.selectedDisplayOption.set(Object.keys(this.displayOptionsIcons)[0]);
  }

  selectDisplayOption(icon: string): void {
    this.selectedDisplayOption.set(icon);
  }

  getOptionsNames(){
    return Object.keys(this.displayOptionsIcons);
  }

  ngOnInit(): void {
    // Fetch the articles for this section.
      this.discoverSectionService.getArticles().pipe(
        catchError((err) => {
          throw err;
        })
      ).subscribe(res => {
        this.articles.set(res.map(a => a));
      })
  }
}
