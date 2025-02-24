import { Component, inject, OnInit, signal } from '@angular/core';
import { DiscoverSectionService } from '../../services/discover-section.service';
import { discoverArticle } from '../../model/discoverArticle.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'discover-section',
  imports: [],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent implements OnInit{
  discoverSectionService = inject(DiscoverSectionService);
  articles = signal<discoverArticle[]>([]);

  
  displayOptions =[
    {svgSrc: '/svg/more.svg', className: 'more'},
    {svgSrc: '/svg/grid_view.svg', className: 'grid'},
    {svgSrc: '/svg/circle.svg', className: 'circle'}
  ]
  selectedDisplayOption = signal('more');

  selectDisplayOption(className: string): void {
    this.selectedDisplayOption.set(className);
  }

  ngOnInit(): void {
      this.discoverSectionService.getArticles().pipe(
        catchError((err) => {
          throw err;
        })
      ).subscribe(res => {
        this.articles.set(res.map(a => a));
      })
  }
}
